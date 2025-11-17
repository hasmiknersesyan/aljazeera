const { I } = inject();

export class MostReadPage {
  articleItems: string;
  mobileAttribute: string;
  mostReadBlock: string;
  mostReadBlockHeader: string;

  constructor() {
    this.mostReadBlock = '//aside[@id="most-read-container"]';
    this.mostReadBlockHeader = 'h2[id="trending-articles-heading"]'
    this.articleItems = 'ol.trending-articles__list li';
    this.mobileAttribute = '.bypass-block-link.hidden--mobile';
  }

  async seeMostReadBlock() {
    I.seeElement(this.mostReadBlock);
    // I.seeElement(this.mostReadBlockHeader);
  }

  async seeMostReadArticles(articleItems: number) {
    I.seeElement(this.articleItems);
    I.seeNumberOfElements(this.articleItems, articleItems);
  }

  async checkNotVisibleHeaderForMobile() {
    I.dontSeeElement(this.mostReadBlockHeader);
  }
  async checkNotVisibleForMobile() {
    // I.resizeWindow(375, 812);   // Mobile viewport (iPhone size)
    I.dontSeeElement(this.mobileAttribute);
    // I.dontSeeElementOnCurrentUrl(this.articleItems);
  }
}

export default new MostReadPage();