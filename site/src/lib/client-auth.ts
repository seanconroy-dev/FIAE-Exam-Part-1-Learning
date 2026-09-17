const API_KEY_STORAGE_KEY = 'apiKey';

type AuthUiRefs = {
  input: HTMLInputElement;
  status: HTMLElement;
  controls?: HTMLElement;
  toggle?: HTMLButtonElement;
  compactStatus?: HTMLElement;
};

type AuthChangeDetail = {
  apiKey: string | null;
  authenticated: boolean;
  user?: unknown;
};

function getApiBase(): string {
  return document.body.dataset.apiBase?.replace(/\/$/, '') ?? '';
}

function setStatus(statusEl: HTMLElement | null, message: string, tone: 'muted' | 'success' | 'error' = 'muted') {
  if (!statusEl) return;

  statusEl.textContent = message;
  statusEl.className = {
    muted: 'text-xs text-gray-500',
    success: 'text-xs text-green-600',
    error: 'text-xs text-red-600',
  }[tone];
}

function setAuthPanelExpanded(ui: AuthUiRefs | undefined, expanded: boolean) {
  if (!ui?.controls || !ui.toggle) return;
  ui.controls.classList.toggle('hidden', !expanded);
  ui.toggle.setAttribute('aria-expanded', String(expanded));
}

function setCompactStatus(statusEl: HTMLElement | undefined, message: string, tone: 'muted' | 'success' | 'error' = 'muted') {
  if (!statusEl) return;

  statusEl.textContent = message;
  statusEl.className = {
    muted: 'text-xs text-gray-500',
    success: 'text-xs text-green-600',
    error: 'text-xs text-red-600',
  }[tone];
}

function emitAuthChange(detail: AuthChangeDetail) {
  window.dispatchEvent(new CustomEvent('fiae:auth-changed', { detail }));
}

function readLocalStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeLocalStorage(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Ignore unavailable storage.
  }
}

function removeLocalStorage(key: string) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // Ignore unavailable storage.
  }
}

export function getApiKey(): string {
  return readLocalStorage(API_KEY_STORAGE_KEY)?.trim() ?? '';
}

export function clearApiKey() {
  removeLocalStorage(API_KEY_STORAGE_KEY);
}

export function hasApiKey(): boolean {
  return Boolean(getApiKey());
}

export function isProtectedApiPath(path: string): boolean {
  return (
    path === '/api/auth/me' ||
    path === '/api/progress' ||
    /^\/api\/progress\/[^/]+\/answer$/.test(path) ||
    /^\/api\/quiz-state\/[^/]+$/.test(path)
  );
}

export async function apiFetch(path: string, init: RequestInit = {}): Promise<Response> {
  const headers = new Headers(init.headers ?? {});

  if (isProtectedApiPath(path)) {
    const apiKey = getApiKey();
    if (apiKey) {
      headers.set('X-API-Key', apiKey);
    }
  }

  return fetch(`${getApiBase()}${path}`, {
    ...init,
    headers,
  });
}

function getUserLabel(payload: unknown): string {
  if (!payload) return '';
  if (typeof payload === 'string') return payload;

  if (typeof payload === 'object') {
    const record = payload as Record<string, unknown>;
    const nestedUser = typeof record.user === 'object' && record.user !== null
      ? (record.user as Record<string, unknown>)
      : null;

    const candidates = [
      record.displayName,
      record.username,
      record.name,
      record.email,
      record.userId,
      record.id,
      nestedUser?.displayName,
      nestedUser?.username,
      nestedUser?.name,
      nestedUser?.email,
      nestedUser?.userId,
      nestedUser?.id,
    ];

    return candidates.find((value): value is string => typeof value === 'string' && value.trim().length > 0)?.trim() ?? '';
  }

  return '';
}

export async function refreshAuthStatus(ui?: AuthUiRefs): Promise<void> {
  const apiKey = getApiKey();

  if (ui) {
    ui.input.value = apiKey;
  }

  if (!apiKey) {
    setStatus(ui?.status ?? null, 'Kein API-Key gespeichert.');
    setCompactStatus(ui?.compactStatus, 'Kein API-Key gespeichert.');
    setAuthPanelExpanded(ui, true);
    emitAuthChange({ apiKey: null, authenticated: false });
    return;
  }

  setStatus(ui?.status ?? null, 'Prüfe API-Key …');

  try {
    const response = await apiFetch('/api/auth/me');
    let payload: unknown = null;

    try {
      payload = await response.clone().json();
    } catch {
      payload = null;
    }

    if (response.ok) {
      const userLabel = getUserLabel(payload);
      setStatus(ui?.status ?? null, userLabel ? `Logged in as ${userLabel}` : 'API-Key verifiziert.', 'success');
      setCompactStatus(ui?.compactStatus, '✓ Verbunden', 'success');
      setAuthPanelExpanded(ui, false);
      emitAuthChange({ apiKey, authenticated: true, user: payload });
      return;
    }

    const invalidKey = response.status === 401 || response.status === 403;
    setStatus(
      ui?.status ?? null,
      invalidKey ? 'Gespeicherter API-Key ist ungültig.' : `Auth-Prüfung fehlgeschlagen (${response.status}).`,
      'error',
    );
    setCompactStatus(ui?.compactStatus, invalidKey ? 'API-Key ungültig.' : 'Authentifizierung fehlgeschlagen.', 'error');
    setAuthPanelExpanded(ui, true);
    emitAuthChange({ apiKey, authenticated: false, user: payload });
  } catch {
    setStatus(ui?.status ?? null, 'Backend nicht erreichbar. API-Key bleibt lokal gespeichert.', 'error');
    setCompactStatus(ui?.compactStatus, 'Backend nicht erreichbar.', 'error');
    setAuthPanelExpanded(ui, true);
    emitAuthChange({ apiKey, authenticated: false });
  }
}

export function initAuthUi() {
  const input = document.getElementById('api-key-input') as HTMLInputElement | null;
  const saveButton = document.getElementById('api-key-save');
  const clearButton = document.getElementById('api-key-clear');
  const status = document.getElementById('api-key-status');
  const controls = document.getElementById('api-key-controls');
  const toggle = document.getElementById('api-key-toggle') as HTMLButtonElement | null;
  const compactStatus = document.getElementById('api-key-compact-status');
  const ui = input && status ? { input, status, controls: controls ?? undefined, toggle: toggle ?? undefined, compactStatus: compactStatus ?? undefined } : undefined;

  window.fiaeAuth = {
    apiFetch,
    clearApiKey,
    getApiKey,
    hasApiKey,
    refreshAuthStatus: () => refreshAuthStatus(ui),
  };

  if (!input || !saveButton || !clearButton || !status) {
    void refreshAuthStatus();
    return;
  }

  toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setAuthPanelExpanded(ui, !expanded);
  });

  saveButton.addEventListener('click', async () => {
    const value = input.value.trim();

    if (!value) {
      clearApiKey();
      await refreshAuthStatus(ui);
      return;
    }

    writeLocalStorage(API_KEY_STORAGE_KEY, value);
    setStatus(status, 'API-Key gespeichert. Prüfe …');
    await refreshAuthStatus(ui);
  });

  clearButton.addEventListener('click', async () => {
    clearApiKey();
    await refreshAuthStatus(ui);
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      saveButton.dispatchEvent(new MouseEvent('click'));
    }
  });

  window.addEventListener('storage', () => {
    void refreshAuthStatus(ui);
  });

  void refreshAuthStatus(ui);
}

declare global {
  interface Window {
    fiaeAuth?: {
      apiFetch: typeof apiFetch;
      clearApiKey: typeof clearApiKey;
      getApiKey: typeof getApiKey;
      hasApiKey: typeof hasApiKey;
      refreshAuthStatus: () => Promise<void>;
    };
  }
}
