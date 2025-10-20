/// <reference types="codeceptjs" />

declare global {
  namespace CodeceptJS {

  type Locator =
      | string
      | { css?: string; xpath?: string; id?: string; name?: string; [key: string]: any };

    interface I {
      /** Navigate to a page by URL */
      amOnPage(url: string): Promise<void>;

      /** Wait for a number of seconds */
      wait(seconds: number): Promise<void>;

      /** Wait until an element appears within timeout (in seconds) */
      waitForElement(locator: string, timeout?: number): Promise<void>;

      /** Click an element (by locator or text) */
      click(locator: string, x?: number, y?: number): Promise<void>;

      /** Check that an element is visible on the page */
      seeElement(locator: string): Promise<void>;

      /** Count how many visible elements match the locator */
      grabNumberOfVisibleElements(locator: string): Promise<number>;

      /** Scroll to an element (with optional offset) */
      scrollTo(locator: string, offsetX?: number, offsetY?: number): Promise<void>;

      /** Press keyboard keys (single or multiple) */
      pressKey(keys: string | string[]): Promise<void>;

      /** Grab current page URL */
      grabCurrentUrl(): Promise<string>;

      /** Assert that condition is truthy */
      assertOk(condition: any, message?: string): void;

      /** Assert that two values are strictly equal */
      assertEqual(actual: any, expected: any, message?: string): void;

      /** Alias for assertOk (handy when destructured) */
      assert(condition: any, message?: string): void;

      fail(message: string): void;
    }
  }
}

export { };
