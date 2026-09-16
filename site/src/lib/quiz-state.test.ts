import { describe, expect, it } from 'vitest';
import {
  ALL_MODULE_KEY,
  buildHistoricalAnswerBody,
  compareSnapshots,
  clearResetTombstone,
  createEmptyStore,
  createNewSnapshot,
  deriveScore,
  hasPendingResetTombstone,
  loadStore,
  markResetTombstone,
  recordAnswer,
  restoreQueueFromSlugs,
  sanitizeStore,
  saveStore,
  setModuleSnapshot,
  validateSnapshotAgainstCards,
} from './quiz-state';

class MemoryStorage {
  private data = new Map<string, string>();

  getItem(key: string) {
    return this.data.get(key) ?? null;
  }

  setItem(key: string, value: string) {
    this.data.set(key, value);
  }

  removeItem(key: string) {
    this.data.delete(key);
  }
}

const knownSlugs = new Set(['a', 'b', 'c', 'd']);

describe('quiz-state local-first persistence', () => {
  it('1. new quiz creates shuffled queue snapshot', () => {
    const snapshot = createNewSnapshot({
      moduleKey: ALL_MODULE_KEY,
      moduleName: null,
      queueSlugs: ['c', 'a', 'b'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    expect(snapshot.queueSlugs).toEqual(['c', 'a', 'b']);
    expect(snapshot.revision).toBe(1);
  });

  it('2. stored queue order is restored unchanged', () => {
    const cards = [{ slug: 'a' }, { slug: 'b' }, { slug: 'c' }];
    const queue = restoreQueueFromSlugs(['c', 'a'], cards);
    expect(queue?.map((c) => c.slug)).toEqual(['c', 'a']);
  });

  it('3. correct answer updates resultsBySlug', () => {
    let snapshot = createNewSnapshot({
      moduleKey: ALL_MODULE_KEY,
      moduleName: null,
      queueSlugs: ['a', 'b'],
      nowIso: '2026-09-16T19:00:00Z',
    });

    snapshot = recordAnswer({ snapshot, slug: 'a', correct: true, nowIso: '2026-09-16T19:01:00Z' });
    expect(snapshot.resultsBySlug.a).toBe('correct');
  });

  it('4. wrong answer updates resultsBySlug', () => {
    let snapshot = createNewSnapshot({
      moduleKey: ALL_MODULE_KEY,
      moduleName: null,
      queueSlugs: ['a', 'b'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    snapshot = recordAnswer({ snapshot, slug: 'a', correct: false, nowIso: '2026-09-16T19:01:00Z' });
    expect(snapshot.resultsBySlug.a).toBe('wrong');
  });

  it('5. currentIndex advances', () => {
    let snapshot = createNewSnapshot({
      moduleKey: ALL_MODULE_KEY,
      moduleName: null,
      queueSlugs: ['a', 'b'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    snapshot = recordAnswer({ snapshot, slug: 'a', correct: true, nowIso: '2026-09-16T19:01:00Z' });
    expect(snapshot.currentIndex).toBe(1);
  });

  it('6. completed becomes true at end', () => {
    let snapshot = createNewSnapshot({
      moduleKey: ALL_MODULE_KEY,
      moduleName: null,
      queueSlugs: ['a', 'b'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    snapshot = recordAnswer({ snapshot, slug: 'a', correct: true, nowIso: '2026-09-16T19:01:00Z' });
    expect(snapshot.completed).toBe(false);
    snapshot = recordAnswer({ snapshot, slug: 'b', correct: false, nowIso: '2026-09-16T19:02:00Z' });
    expect(snapshot.currentIndex).toBe(2);
    expect(snapshot.completed).toBe(true);
  });

  it('7. correct count derives correctly', () => {
    const score = deriveScore({ a: 'correct', b: 'wrong', c: 'correct' });
    expect(score.correct).toBe(2);
  });

  it('8. wrong count derives correctly', () => {
    const score = deriveScore({ a: 'correct', b: 'wrong', c: 'correct' });
    expect(score.wrong).toBe(1);
    expect(score.completedCount).toBe(3);
  });

  it('9. state survives serialization/deserialization', () => {
    const storage = new MemoryStorage();
    let store = createEmptyStore();
    const snapshot = createNewSnapshot({
      moduleKey: ALL_MODULE_KEY,
      moduleName: null,
      queueSlugs: ['a'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    store = setModuleSnapshot(store, snapshot);
    saveStore(storage, store);
    const loaded = loadStore(storage);
    expect(loaded.states[ALL_MODULE_KEY]).toEqual(snapshot);
  });

  it('10. different modules have independent saved states', () => {
    let store = createEmptyStore();
    store = setModuleSnapshot(store, createNewSnapshot({
      moduleKey: 'mod-a',
      moduleName: 'Module A',
      queueSlugs: ['a'],
      nowIso: '2026-09-16T19:00:00Z',
    }));
    store = setModuleSnapshot(store, createNewSnapshot({
      moduleKey: 'mod-b',
      moduleName: 'Module B',
      queueSlugs: ['b'],
      nowIso: '2026-09-16T19:01:00Z',
    }));
    expect(Object.keys(store.states).sort()).toEqual(['mod-a', 'mod-b']);
  });

  it('11. selecting a saved module restores existing snapshot data', () => {
    const snapshot = createNewSnapshot({
      moduleKey: 'mod-a',
      moduleName: 'Module A',
      queueSlugs: ['a', 'b'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    const store = setModuleSnapshot(createEmptyStore(), snapshot);
    expect(store.states['mod-a']).toEqual(snapshot);
  });

  it('12. invalid local JSON does not crash and resets quiz-state key only', () => {
    const storage = new MemoryStorage();
    storage.setItem('fiaeQuizStateV1', '{invalid-json');
    storage.setItem('apiKey', 'still-there');
    const loaded = loadStore(storage);
    expect(loaded.states).toEqual({});
    expect(storage.getItem('fiaeQuizStateV1')).toBeNull();
    expect(storage.getItem('apiKey')).toBe('still-there');
  });

  it('13. unknown card slug is rejected as invalid saved state', () => {
    const snapshot = createNewSnapshot({
      moduleKey: ALL_MODULE_KEY,
      moduleName: null,
      queueSlugs: ['unknown'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    expect(validateSnapshotAgainstCards(snapshot, knownSlugs)).toBe(false);
  });

  it('14. currentIndex outside queue is rejected', () => {
    const snapshot = {
      ...createNewSnapshot({
        moduleKey: ALL_MODULE_KEY,
        moduleName: null,
        queueSlugs: ['a'],
        nowIso: '2026-09-16T19:00:00Z',
      }),
      currentIndex: 2,
    };
    expect(validateSnapshotAgainstCards(snapshot, knownSlugs)).toBe(false);
  });

  it('15. local higher revision wins over older remote', () => {
    const base = createNewSnapshot({
      moduleKey: ALL_MODULE_KEY,
      moduleName: null,
      queueSlugs: ['a'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    const localNewer = { ...base, revision: 5 };
    const remoteOlder = { ...base, revision: 3 };
    expect(compareSnapshots(localNewer, remoteOlder)).toBe('local-newer');
  });

  it('16. remote higher revision replaces older local', () => {
    const base = createNewSnapshot({
      moduleKey: ALL_MODULE_KEY,
      moduleName: null,
      queueSlugs: ['a'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    const localOlder = { ...base, revision: 3 };
    const remoteNewer = { ...base, revision: 5 };
    expect(compareSnapshots(localOlder, remoteNewer)).toBe('remote-newer');
  });

  it('17. equal identical revisions are synchronized', () => {
    const base = createNewSnapshot({
      moduleKey: ALL_MODULE_KEY,
      moduleName: null,
      queueSlugs: ['a'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    const local = { ...base, revision: 5 };
    const remote = { ...base, revision: 5 };
    expect(compareSnapshots(local, remote)).toBe('equal');
  });

  it('17a. equal revisions ignore backend updatedAt differences', () => {
    const base = createNewSnapshot({
      moduleKey: ALL_MODULE_KEY,
      moduleName: null,
      queueSlugs: ['a'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    const local = { ...base, revision: 5, updatedAt: '2026-09-16T19:01:00Z' };
    const remote = { ...base, revision: 5, updatedAt: '2026-09-16T19:02:00Z' };
    expect(compareSnapshots(local, remote)).toBe('equal');
  });

  it('18. equal differing revisions are conflict', () => {
    const base = createNewSnapshot({
      moduleKey: ALL_MODULE_KEY,
      moduleName: null,
      queueSlugs: ['a'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    const local = { ...base, revision: 5, resultsBySlug: { a: 'correct' as const } };
    const remote = { ...base, revision: 5, resultsBySlug: { a: 'wrong' as const } };
    expect(compareSnapshots(local, remote)).toBe('conflict');
  });

  it('revision helper remains directional', () => {
    const base = createNewSnapshot({
      moduleKey: ALL_MODULE_KEY,
      moduleName: null,
      queueSlugs: ['a'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    const localNewer = { ...base, revision: 5 };
    const remoteOlder = { ...base, revision: 3 };
    expect(compareSnapshots(remoteOlder, localNewer)).toBe('remote-newer');
  });

  it('19. missing API key does not prevent local saving', () => {
    const storage = new MemoryStorage();
    const store = setModuleSnapshot(createEmptyStore(), createNewSnapshot({
      moduleKey: ALL_MODULE_KEY,
      moduleName: null,
      queueSlugs: ['a'],
      nowIso: '2026-09-16T19:00:00Z',
    }));
    saveStore(storage, store);
    expect(storage.getItem('fiaeQuizStateV1')).toBeTruthy();
    expect(storage.getItem('apiKey')).toBeNull();
  });

  it('20. failed remote sync does not remove local snapshot', () => {
    const storage = new MemoryStorage();
    const snapshot = createNewSnapshot({
      moduleKey: ALL_MODULE_KEY,
      moduleName: null,
      queueSlugs: ['a'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    saveStore(storage, setModuleSnapshot(createEmptyStore(), snapshot));
    const loaded = loadStore(storage);
    expect(loaded.states[ALL_MODULE_KEY]).toEqual(snapshot);
  });

  it('21. deleting apiKey does not remove quiz state', () => {
    const storage = new MemoryStorage();
    const snapshot = createNewSnapshot({
      moduleKey: ALL_MODULE_KEY,
      moduleName: null,
      queueSlugs: ['a'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    saveStore(storage, setModuleSnapshot(createEmptyStore(), snapshot));
    storage.setItem('apiKey', 'x');
    storage.removeItem('apiKey');
    const loaded = loadStore(storage);
    expect(loaded.states[ALL_MODULE_KEY]).toEqual(snapshot);
  });

  it('22. reset tombstone blocks stale-remote restore path', () => {
    const store = markResetTombstone(createEmptyStore(), 'mod-a', '2026-09-16T19:00:00Z');
    expect(hasPendingResetTombstone(store, 'mod-a')).toBe(true);
  });

  it('22a. reset keeps the new local quiz after the remote delete clears', () => {
    const oldSnapshot = createNewSnapshot({
      moduleKey: 'mod-a',
      moduleName: 'Module A',
      queueSlugs: ['a'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    const oldStore = setModuleSnapshot(createEmptyStore(), { ...oldSnapshot, revision: 10 });
    const resetStore = markResetTombstone(oldStore, 'mod-a', '2026-09-16T19:01:00Z');
    const newSnapshot = createNewSnapshot({
      moduleKey: 'mod-a',
      moduleName: 'Module A',
      queueSlugs: ['b'],
      nowIso: '2026-09-16T19:02:00Z',
      previousRevision: oldSnapshot.revision,
    });
    const afterDelete = clearResetTombstone(setModuleSnapshot(resetStore, newSnapshot), 'mod-a');
    expect(afterDelete.states['mod-a']).toEqual(newSnapshot);
    expect(hasPendingResetTombstone(afterDelete, 'mod-a')).toBe(false);
  });

  it('22b. malformed module state does not discard valid state or API key', () => {
    const storage = new MemoryStorage();
    const valid = createNewSnapshot({
      moduleKey: 'mod-a',
      moduleName: 'Module A',
      queueSlugs: ['a'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    storage.setItem('apiKey', 'still-there');
    storage.setItem('fiaeQuizStateV1', JSON.stringify({
      lastActiveModuleKey: 'mod-a',
      states: { 'mod-a': valid, 'mod-b': { broken: true } },
      tombstones: { 'mod-c': { moduleKey: 'mod-c', createdAt: '2026-09-16T19:00:00Z', pendingRemoteDelete: true } },
    }));
    const loaded = loadStore(storage);
    expect(loaded.states['mod-a']).toEqual(valid);
    expect(loaded.states['mod-b']).toBeUndefined();
    expect(loaded.tombstones['mod-c']).toBeDefined();
    expect(storage.getItem('apiKey')).toBe('still-there');
  });

  it('22c. malformed last-active module is cleared', () => {
    const storage = new MemoryStorage();
    storage.setItem('fiaeQuizStateV1', JSON.stringify({
      lastActiveModuleKey: 'mod-b',
      states: { 'mod-b': { broken: true } },
      tombstones: {},
    }));
    const loaded = loadStore(storage);
    expect(loaded.states).toEqual({});
    expect(loaded.lastActiveModuleKey).toBeNull();
  });

  it('23. historical answer payload uses { correct } field', () => {
    expect(buildHistoricalAnswerBody(true)).toEqual({ correct: true });
    expect(buildHistoricalAnswerBody(false)).toEqual({ correct: false });
  });

  it('sanitizes malformed module states while keeping valid ones', () => {
    let store = createEmptyStore();
    const valid = createNewSnapshot({
      moduleKey: 'valid',
      moduleName: 'Valid',
      queueSlugs: ['a'],
      nowIso: '2026-09-16T19:00:00Z',
    });
    const invalid = {
      ...createNewSnapshot({
        moduleKey: 'invalid',
        moduleName: 'Invalid',
        queueSlugs: ['missing'],
        nowIso: '2026-09-16T19:00:00Z',
      }),
    };
    store = setModuleSnapshot(store, valid);
    store = setModuleSnapshot(store, invalid);
    const sanitized = sanitizeStore(store, knownSlugs);
    expect(sanitized.states.valid).toEqual(valid);
    expect(sanitized.states.invalid).toBeUndefined();
  });
});
