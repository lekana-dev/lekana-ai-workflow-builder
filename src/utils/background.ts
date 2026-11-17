import { waitUntil } from '@vercel/functions';

/**
 * Run work after the HTTP response has been sent.
 *
 * On a long-lived server (Docker / Cloud Run / local) the promise simply runs.
 * On Vercel, waitUntil() keeps the function alive until the promise settles
 * (bounded by the function's maxDuration), so background work isn't frozen
 * once the response is returned.
 */
export function runInBackground(task: () => Promise<unknown>): void {
    const job = new Promise<void>((resolve) => setImmediate(resolve))
        .then(task)
        .catch((err) => console.error('[background] task failed:', err));
    waitUntil(job);
}
