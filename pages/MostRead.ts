import { resolveFirstExistingSelector, assertEqual } from '../support/helpers';
const { Locators } = require('../support/locators');

export default class MostRead {
  private I: CodeceptJS.I;
  constructor(I: CodeceptJS.I) { this.I = I; }

  private async container(): Promise<string> {
    // Try robust candidates; fall back to the ID
    return await resolveFirstExistingSelector(this.I, Locators.mostRead.containerCandidates);
  }

    private async getContainer(): Promise<string> {
    return await resolveFirstExistingSelector(this.I, Locators.mostRead.containerCandidates);
  }
  private async itemsSelector(): Promise<string> {
    const root = await this.getContainer();
    // Build items selector relative to the container we actually found
    return `${root} a, ${root} li article, ${root} li a`;
  }

  async assertVisible() {
    const root = await this.getContainer();
    this.I.seeElement(root);
  }

  async assertHasExactly(count: number) {
    const items = await this.itemsSelector();
    const visible = await this.I.grabNumberOfVisibleElements(items);
    assertEqual(visible, count, `Expected ${count} posts in Most Read section`);
  }

  async assertNotVisible() {
    const root = await this.getContainer();
    this.I.seeElement(root);
  }

  async assertUrlHasAnchor() {
    const url = await this.I.grabCurrentUrl();
    this.I.assertOk(url.includes('#most-read-container'), `URL missing '#most-read-container'`);
  }
}
