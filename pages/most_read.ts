const { I } = inject();

export class MostReadPage {
  articleItems: string;
  mobileAttribute: string;
  mostReadBlock: string;
  mostReadBlockHeader: string;
  bypassLink: string;

  constructor() {
    this.mostReadBlock = '//aside[@id="most-read-container"]';
    this.mostReadBlockHeader = 'h2[id="trending-articles-heading"]'
    this.articleItems = 'ol.trending-articles__list li';
    this.bypassLink = '.bypass-block-link.hidden--mobile';
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

  async checkBypassLinkIsClickable() {
    I.isClickable(this.bypassLink);
  }
}

export default new MostReadPage();