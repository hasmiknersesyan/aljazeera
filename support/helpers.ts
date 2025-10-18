/// <reference types="codeceptjs" />
/// <reference path="../steps.d.ts" />

export async function pressTabNTimes(I: CodeceptJS.I, n: number) {
  for (let i = 0; i < n; i++) {
    await I.pressKey('Tab');
  }
}