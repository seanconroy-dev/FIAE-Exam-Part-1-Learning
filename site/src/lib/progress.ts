const API_KEY_STORAGE_KEY = 'fiae.apiKey';

function getSessionStorage(): Storage | null {
  if (typeof window === 'undefined') return null;
  return window.sessionStorage;
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
    'Content-Type': 'application/json',
    'X-API-Key': apiKey,
  };
}

export async function verifyApiKey(apiBase: string, apiKey: string): Promise<{ ok: boolean }> {
  try {
    const response = await fetch(`${apiBase}/api/auth/me`, {
      method: 'GET',
      headers: authHeaders(apiKey),
    });
    return { ok: response.ok };
  } catch {
    return { ok: false };
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
      headers: authHeaders(apiKey),
      body: JSON.stringify({ correct }),
    });
  } catch {
    // intentionally ignored: persistence failures must not block quiz flow
  }
}
