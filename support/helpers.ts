/// <reference types="codeceptjs" />

declare global {
  namespace CodeceptJS {
    interface I {
      pressKey(keys: string | string[]): Promise<void>;
    }
  }
}

export async function pressTabNTimes(I: CodeceptJS.I, n: number) {
  for (let i = 0; i < n; i++) {
    await I.pressKey('Tab');
  }
}