export const QUIZ_STATE_STORAGE_KEY = 'fiaeQuizStateV1';
export const ALL_MODULE_KEY = 'all';

export type QuizAnswerResult = 'correct' | 'wrong';

export interface QuizSnapshot {
  moduleKey: string;
  moduleName: string | null;
  queueSlugs: string[];
  currentIndex: number;
  resultsBySlug: Record<string, QuizAnswerResult>;
  completed: boolean;
  revision: number;
  startedAt: string;
  updatedAt: string;
}

export interface QuizResetTombstone {
  moduleKey: string;
  createdAt: string;
  pendingRemoteDelete: boolean;
}

export interface QuizStateStoreV1 {
  lastActiveModuleKey: string | null;
  states: Record<string, QuizSnapshot>;
  tombstones: Record<string, QuizResetTombstone>;
}

export type SnapshotCompareResult = 'local-newer' | 'remote-newer' | 'equal' | 'conflict';

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export function createEmptyStore(): QuizStateStoreV1 {
  return {
    lastActiveModuleKey: null,
    states: {},
    tombstones: {},
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isIsoDateLike(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0;
}

function isResultValue(value: unknown): value is QuizAnswerResult {
  return value === 'correct' || value === 'wrong';
}

export function validateSnapshotShape(value: unknown): value is QuizSnapshot {
  if (!isRecord(value)) return false;
  if (typeof value.moduleKey !== 'string' || !value.moduleKey.trim()) return false;
  if (!(value.moduleName === null || typeof value.moduleName === 'string')) return false;
  if (!Array.isArray(value.queueSlugs) || value.queueSlugs.length === 0) return false;
  if (!value.queueSlugs.every((slug) => typeof slug === 'string' && slug.trim().length > 0)) return false;
  if (!Number.isInteger(value.currentIndex) || value.currentIndex < 0 || value.currentIndex > value.queueSlugs.length) return false;
  if (!isRecord(value.resultsBySlug)) return false;
  if (!Object.values(value.resultsBySlug).every(isResultValue)) return false;
  if (typeof value.completed !== 'boolean') return false;
  if (!Number.isInteger(value.revision) || value.revision < 1) return false;
  if (!isIsoDateLike(value.startedAt) || !isIsoDateLike(value.updatedAt)) return false;
  return true;
}

export function validateSnapshotAgainstCards(snapshot: QuizSnapshot, knownSlugs: Set<string>): boolean {
  if (!validateSnapshotShape(snapshot)) return false;
  const queueSet = new Set(snapshot.queueSlugs);
  if (queueSet.size !== snapshot.queueSlugs.length) return false;
  for (const slug of snapshot.queueSlugs) {
    if (!knownSlugs.has(slug)) return false;
  }
  for (const [slug, result] of Object.entries(snapshot.resultsBySlug)) {
    if (!queueSet.has(slug)) return false;
    if (!isResultValue(result)) return false;
  }
  return true;
}

function toStore(value: unknown): QuizStateStoreV1 | null {
  if (!isRecord(value)) return null;
  if (!(value.lastActiveModuleKey === null || typeof value.lastActiveModuleKey === 'string')) return null;
  if (!isRecord(value.states)) return null;

  const states: Record<string, QuizSnapshot> = {};
  for (const [moduleKey, snapshot] of Object.entries(value.states)) {
    if (!validateSnapshotShape(snapshot) || snapshot.moduleKey !== moduleKey) continue;
    states[moduleKey] = snapshot;
  }

  const tombstones: Record<string, QuizResetTombstone> = {};
  if (value.tombstones !== undefined && isRecord(value.tombstones)) {
    for (const [moduleKey, marker] of Object.entries(value.tombstones)) {
      if (!isRecord(marker)) continue;
      if (marker.moduleKey !== moduleKey) continue;
      if (!isIsoDateLike(marker.createdAt)) continue;
      if (typeof marker.pendingRemoteDelete !== 'boolean') continue;
      tombstones[moduleKey] = marker as QuizResetTombstone;
    }
  }

  return {
    lastActiveModuleKey: value.lastActiveModuleKey && states[value.lastActiveModuleKey]
      ? value.lastActiveModuleKey
      : null,
    states,
    tombstones,
  };
}

export function loadStore(storage: StorageLike): QuizStateStoreV1 {
  try {
    const raw = storage.getItem(QUIZ_STATE_STORAGE_KEY);
    if (!raw) return createEmptyStore();
    const parsed = JSON.parse(raw) as unknown;
    const store = toStore(parsed);
    if (!store) {
      storage.removeItem(QUIZ_STATE_STORAGE_KEY);
      return createEmptyStore();
    }
    if (JSON.stringify(store) !== raw) {
      try {
        saveStore(storage, store);
      } catch {
        // Keep the sanitized store in memory when storage is unavailable.
      }
    }
    return store;
  } catch {
    try {
      storage.removeItem(QUIZ_STATE_STORAGE_KEY);
    } catch {
      // Ignore storage errors.
    }
    return createEmptyStore();
  }
}

export function saveStore(storage: StorageLike, store: QuizStateStoreV1): void {
  storage.setItem(QUIZ_STATE_STORAGE_KEY, JSON.stringify(store));
}

export function setModuleSnapshot(store: QuizStateStoreV1, snapshot: QuizSnapshot): QuizStateStoreV1 {
  return {
    ...store,
    lastActiveModuleKey: snapshot.moduleKey,
    states: {
      ...store.states,
      [snapshot.moduleKey]: snapshot,
    },
  };
}

export function removeModuleSnapshot(store: QuizStateStoreV1, moduleKey: string): QuizStateStoreV1 {
  const nextStates = { ...store.states };
  delete nextStates[moduleKey];
  return {
    ...store,
    lastActiveModuleKey: store.lastActiveModuleKey === moduleKey ? null : store.lastActiveModuleKey,
    states: nextStates,
  };
}

export function markResetTombstone(store: QuizStateStoreV1, moduleKey: string, nowIso: string): QuizStateStoreV1 {
  return {
    ...store,
    tombstones: {
      ...store.tombstones,
      [moduleKey]: {
        moduleKey,
        createdAt: nowIso,
        pendingRemoteDelete: true,
      },
    },
  };
}

export function clearResetTombstone(store: QuizStateStoreV1, moduleKey: string): QuizStateStoreV1 {
  if (!store.tombstones[moduleKey]) return store;
  const nextTombstones = { ...store.tombstones };
  delete nextTombstones[moduleKey];
  return {
    ...store,
    tombstones: nextTombstones,
  };
}

export function hasPendingResetTombstone(store: QuizStateStoreV1, moduleKey: string): boolean {
  return Boolean(store.tombstones[moduleKey]?.pendingRemoteDelete);
}

export function createNewSnapshot(input: {
  moduleKey: string;
  moduleName: string | null;
  queueSlugs: string[];
  nowIso: string;
  previousRevision?: number;
}): QuizSnapshot {
  const revision = Math.max(1, (input.previousRevision ?? 0) + 1);
  return {
    moduleKey: input.moduleKey,
    moduleName: input.moduleName,
    queueSlugs: [...input.queueSlugs],
    currentIndex: 0,
    resultsBySlug: {},
    completed: false,
    revision,
    startedAt: input.nowIso,
    updatedAt: input.nowIso,
  };
}

export function deriveScore(resultsBySlug: Record<string, QuizAnswerResult>): {
  correct: number;
  wrong: number;
  completedCount: number;
} {
  let correct = 0;
  let wrong = 0;
  for (const result of Object.values(resultsBySlug)) {
    if (result === 'correct') correct += 1;
    if (result === 'wrong') wrong += 1;
  }
  return {
    correct,
    wrong,
    completedCount: correct + wrong,
  };
}

export function recordAnswer(input: {
  snapshot: QuizSnapshot;
  slug: string;
  correct: boolean;
  nowIso: string;
}): QuizSnapshot {
  const nextResults = {
    ...input.snapshot.resultsBySlug,
    [input.slug]: input.correct ? 'correct' : 'wrong',
  };

  const nextIndex = Math.min(input.snapshot.currentIndex + 1, input.snapshot.queueSlugs.length);
  const completed = nextIndex >= input.snapshot.queueSlugs.length;

  return {
    ...input.snapshot,
    currentIndex: completed ? input.snapshot.queueSlugs.length : nextIndex,
    resultsBySlug: nextResults,
    completed,
    revision: input.snapshot.revision + 1,
    updatedAt: input.nowIso,
  };
}

export function restoreQueueFromSlugs<T extends { slug: string }>(queueSlugs: string[], cards: T[]): T[] | null {
  const bySlug = new Map(cards.map((card) => [card.slug, card]));
  const queue: T[] = [];
  for (const slug of queueSlugs) {
    const card = bySlug.get(slug);
    if (!card) return null;
    queue.push(card);
  }
  return queue;
}

export function dedupeCardsBySlug<T extends { slug: string }>(cards: T[]): T[] {
  const seenSlugs = new Set<string>();
  return cards.filter((card) => {
    if (seenSlugs.has(card.slug)) return false;
    seenSlugs.add(card.slug);
    return true;
  });
}

function sameResults(a: Record<string, QuizAnswerResult>, b: Record<string, QuizAnswerResult>): boolean {
  const aKeys = Object.keys(a).sort();
  const bKeys = Object.keys(b).sort();
  if (aKeys.length !== bKeys.length) return false;
  for (let i = 0; i < aKeys.length; i += 1) {
    const key = aKeys[i];
    if (key !== bKeys[i]) return false;
    if (a[key] !== b[key]) return false;
  }
  return true;
}

export function sameSnapshot(a: QuizSnapshot, b: QuizSnapshot): boolean {
  if (a.moduleKey !== b.moduleKey) return false;
  if (a.moduleName !== b.moduleName) return false;
  if (a.currentIndex !== b.currentIndex) return false;
  if (a.completed !== b.completed) return false;
  if (a.revision !== b.revision) return false;
  if (a.startedAt !== b.startedAt) return false;
  if (a.queueSlugs.length !== b.queueSlugs.length) return false;
  for (let i = 0; i < a.queueSlugs.length; i += 1) {
    if (a.queueSlugs[i] !== b.queueSlugs[i]) return false;
  }
  return sameResults(a.resultsBySlug, b.resultsBySlug);
}

export function compareSnapshots(local: QuizSnapshot, remote: QuizSnapshot): SnapshotCompareResult {
  if (local.revision > remote.revision) return 'local-newer';
  if (remote.revision > local.revision) return 'remote-newer';
  return sameSnapshot(local, remote) ? 'equal' : 'conflict';
}

export function sanitizeStore(store: QuizStateStoreV1, knownSlugs: Set<string>): QuizStateStoreV1 {
  let next = store;
  let changed = false;
  for (const [moduleKey, snapshot] of Object.entries(store.states)) {
    if (!validateSnapshotAgainstCards(snapshot, knownSlugs)) {
      if (!changed) {
        next = {
          ...store,
          states: { ...store.states },
        };
        changed = true;
      }
      delete next.states[moduleKey];
      if (next.lastActiveModuleKey === moduleKey) {
        next.lastActiveModuleKey = null;
      }
    }
  }
  return changed ? next : store;
}

export function buildHistoricalAnswerBody(correct: boolean): { correct: boolean } {
  return { correct };
}
