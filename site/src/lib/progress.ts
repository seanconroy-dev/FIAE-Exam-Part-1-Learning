const API_KEY_STORAGE_KEY = 'fiae.apiKey';

function getSessionStorage(): Storage | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

export function getStoredApiKey(): string | null {
  const storage = getSessionStorage();
  if (!storage) return null;
  const value = storage.getItem(API_KEY_STORAGE_KEY);
  return value && value.trim() ? value : null;
}

export function storeApiKeyForSession(apiKey: string): void {
  const storage = getSessionStorage();
  if (!storage) return;
  storage.setItem(API_KEY_STORAGE_KEY, apiKey);
}

export function clearStoredApiKey(): void {
  const storage = getSessionStorage();
  if (!storage) return;
  storage.removeItem(API_KEY_STORAGE_KEY);
}

function authHeaders(apiKey: string): HeadersInit {
  return {
    'X-API-Key': apiKey,
  };
}

function jsonAuthHeaders(apiKey: string): HeadersInit {
  return {
    'Content-Type': 'application/json',
    'X-API-Key': apiKey,
  };
}

export async function verifyApiKey(
  apiBase: string,
  apiKey: string,
): Promise<{ ok: boolean; status?: number; reason?: 'unauthorized' | 'http_error' | 'network_error' }> {
  try {
    const response = await fetch(`${apiBase}/api/auth/me`, {
      method: 'GET',
      headers: authHeaders(apiKey),
    });
    if (response.ok) return { ok: true, status: response.status };
    if (response.status === 401 || response.status === 403) {
      return { ok: false, status: response.status, reason: 'unauthorized' };
    }
    return { ok: false, status: response.status, reason: 'http_error' };
  } catch {
    return { ok: false, reason: 'network_error' };
  }
}

export async function postCardAnswerProgress(
  apiBase: string,
  apiKey: string,
  cardSlug: string,
  correct: boolean,
): Promise<void> {
  try {
    await fetch(`${apiBase}/api/progress/${encodeURIComponent(cardSlug)}/answer`, {
      method: 'POST',
      headers: jsonAuthHeaders(apiKey),
      body: JSON.stringify({ correct }),
    });
  } catch {
    // intentionally ignored: persistence failures must not block quiz flow
  }
}
