const { I } = inject();

export class MostReadPage {
  articleItems: string;

  constructor() {
    this.articleItems = '//div[contains(@class, "bypass-block-links-container")]//a[contains(text(), "Skip to Most Read")]';
  }

  async seeMostReadArticles() {
    I.seeElement(this.articleItems);
  }
}

export default new MostReadPage();