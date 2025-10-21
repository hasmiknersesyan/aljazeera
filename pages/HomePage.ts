/// <reference types="codeceptjs" />
/// <reference path="../steps.d.ts" />
/// <reference path="../types/codecept-augment.d.ts" />

import { Locators } from '../support/locators';

export default class HomePage {
    private I: CodeceptJS.I;

    constructor(I: CodeceptJS.I) {
        this.I = I;
    }


    async open() {
        this.I.amOnPage("/");
         await this.I.waitForElement('header', 10);
    }

  async focusPageChromeWorkaround() {
    // click header to move focus into the document, then tabbing reveals skip links
    this.I.seeElement(Locators.header);
    await this.I.click(Locators.header, 1, 1); // click top-left inside header
  }

  async scrollToMostReadIfPresent() {
    for (const candidate of Locators.mostRead.containerCandidates) {
      const visible = await this.I.grabNumberOfVisibleElements(candidate);
      if (visible > 0) {
        await this.I.scrollTo(candidate);
        return;
      }
    }
  }
}
