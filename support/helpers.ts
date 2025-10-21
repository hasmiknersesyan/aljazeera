/// <reference types="codeceptjs" />
/// <reference path="../steps.d.ts" />
/// <reference path="../types/codecept-augment.d.ts" />
import assert from 'assert';

export async function pressTabNTimes(I: CodeceptJS.I, n: number) {
  for (let i = 0; i < n; i++) {
    await I.pressKey('Tab');
  }
}

  /**
   * Assert that two values are strictly equal.
   */
  export async function assertEqual(actual: any, expected: any, message?: string) {
    assert.strictEqual(
      actual,
      expected,
      message || `Expected ${actual} to equal ${expected}`
    );
  }


export async function assertOk(condition: any, message?: string) {
  assert.ok(condition, message || 'Expected condition to be truthy');
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

export async function resolveFirstVisibleSelector(
  I: CodeceptJS.I,
  selectors: string[],
  timeoutSec = 5
): Promise<string> {
  const deadline = Date.now() + timeoutSec * 1000;

  while (Date.now() < deadline) {
    for (const sel of selectors) {
      const count = await I.grabNumberOfVisibleElements(sel);
      if (count > 0) return sel; // ✅ return a string selector
    }
    await I.wait(0.25);
  }

  // If nothing visible, still return the first as fallback (string),
  // so subsequent calls get a string (and not an array).
  return selectors[0];
}

export async function resolveFirstExistingSelector(
  I: CodeceptJS.I,
  selectors: string[],
  timeoutSec = 5
): Promise<string> {
  const deadline = Date.now() + timeoutSec * 1000;
  while (Date.now() < deadline) {
    for (const selector of selectors) {
      const count = await I.grabNumberOfVisibleElements(selector);
      if (count > 0) return selector; // ✅ Found one that exists
    }
    await I.wait(0.25);
  }
  // fallback to first one
  return selectors[0];
}