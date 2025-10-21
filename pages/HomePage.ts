/// <reference types="codeceptjs" />
/// <reference path="../steps.d.ts" />
/// <reference path="../types/codecept-augment.d.ts" />

import { Locators } from '../support/locators';

const HOME_URL = '/';
export default class HomePage {
  private I: CodeceptJS.I;

  constructor(I: CodeceptJS.I) {
    this.I = I;
  }

    async open() {
        this.I.amOnPage("https://www.aljazeera.com/");
        await this.I.waitForElement(Locators.live.playerRoot, 1);
    }

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Focus the page header to reveal accessibility skip links
   * on Chrome by clicking the top-left of the header.
   * This is a workaround because Chrome does not focus the page
   * when clicking the body or html elements.
   */
  /*******  3c25b8e7-3ede-4806-84d6-43feeb8c0803  *******/
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
