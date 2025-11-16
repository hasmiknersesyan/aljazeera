const { I } = inject();
import { MostReadPage } from '../pages/most_read';

let mostReadPage: MostReadPage;

Before(async () => {
  mostReadPage = new MostReadPage();
});

Given('I have Most Read article on the page', async () => {
  console.log('Most Read section is present on the page');
});

When('I am on the aljazeera.com page', () => {
  I.amOnPage('/');
  I.wait(2);
});

Then('I should see the Most Read article', async () => {
    // const articleItems = '//div[contains(@class, "bypass-block-links-container")]//a[contains(text(), "Skip to Most Read")]';
    // I.seeElement(articleItems);
    await mostReadPage.seeMostReadArticles();
});
