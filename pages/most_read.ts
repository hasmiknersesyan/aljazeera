const { I } = inject();

export class MostReadPage {
  articleItems: string;
  mobileAttribute: string;

  constructor() {
    this.articleItems = '//div[contains(@class, "bypass-block-links-container")]//a[contains(text(), "Skip to Most Read")]';
    this.mobileAttribute = '.bypass-block-link.hidden--mobile';
  }

  async seeMostReadArticles() {
    I.seeElement(this.articleItems);
  }

  async checkNotVisibleForMobile() {
    // I.resizeWindow(375, 812);   // Mobile viewport (iPhone size)
    I.dontSeeElement(this.mobileAttribute);
    // I.dontSeeElementOnCurrentUrl(this.articleItems);
  }
}

export default new MostReadPage();