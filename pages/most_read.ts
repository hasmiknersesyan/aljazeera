const { I } = inject();

export class MostReadPage {
  articleItems: string;
  mobileAttribute: string;
  mostReadBlock: string;
  mostReadBlockHeader: string;
  bypassLink: string;
  byPassContainer: string;

  constructor() {
    this.mostReadBlock = '//aside[@id="most-read-container"]';
    this.mostReadBlockHeader = 'h2[id="trending-articles-heading"]'
    this.articleItems = 'ol.trending-articles__list li';
    this.bypassLink = '.bypass-block-link.hidden--mobile';
    this.byPassContainer = '.bypass-block-links-container';
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

  async checkBypassLink() {
    I.seeElement(this.bypassLink);
  }

  async clickOnHeader() {
    I.click('header');
  }

    async pressTab() {
    I.pressKey('Tab');
     I.pressKey('Tab');
      I.pressKey('Tab');
  
  }

  async pressEnter() {
    I.pressKey('Enter');
  }

  async checkBypassLinkContainerAppears() {
   I.seeElement('.bypass-block-links-container');
  }

  async changedURL() {
    I.seeInCurrentUrl('#most-read-container');
  }
}

export default new MostReadPage();