/// <reference types="codeceptjs" />
/// <reference path="../steps.d.ts" />

export async function pressTabNTimes(I: CodeceptJS.I, n: number) {
  for (let i = 0; i < n; i++) {
    await I.pressKey('Tab');
  }
}

/**
 * Utility: wait for URL to contain a specific fragment/hash.
 */
export async function waitForUrlFragment(I: CodeceptJS.I, fragment: string, timeoutSec = 5) {
  const start = Date.now();
  while ((Date.now() - start) / 1000 < timeoutSec) {
    const url = await I.grabCurrentUrl();
    if (url.includes(fragment)) return;
    await I.wait(0.25);
  }
  const current = await I.grabCurrentUrl();
  I.fail(`URL did not contain "${fragment}" within ${timeoutSec}s. Current: ${current}`);
}