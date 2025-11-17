const { I } = inject();
import { MostReadPage } from '../pages/most_read';

let mostReadPage: MostReadPage;

Before(async () => {
  mostReadPage = new MostReadPage();
});

Given('I open the Al Jazeera homepage', async () => {
  I.amOnPage('/');
  I.wait(2);
});

When('I view the page on a desktop screen size', () => {
  I.resizeWindow(1920, 1080);
});

Then('I should see the Most Read section', async () => {
  await mostReadPage.seeMostReadBlock();
});

Then('I should see the "Most Read" section has 10 posts', async () => {
  await mostReadPage.seeMostReadArticles(10);
});

When('I view the page on a mobile screen size', () => {
  I.resizeWindow(375, 812);   // Mobile viewport (iPhone size)
  I.wait(2);
});

Then('I should see the bypass link', async () => {
  await mostReadPage.checkBypassLink();
});


Then('I should see the bypass link is clickable', async () => {
  await mostReadPage.checkBypassLinkIsClickable();
});