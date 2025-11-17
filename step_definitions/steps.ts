const { I } = inject();
import { MostReadPage } from '../pages/most_read';
import { LivePage } from '../pages/live';

let mostReadPage: MostReadPage;
let livePage: LivePage;

Before(async () => {
  mostReadPage = new MostReadPage();
  livePage = new LivePage();
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



Given('I click the empty white space', () => {
  mostReadPage.clickOnHeader();
});

When('I press the TAB key to reveal the Bypass Blocks menu', () => {
  mostReadPage.pressTab();
});

Then('the Bypass Blocks menu should become visible', async () => {
  await mostReadPage.checkBypassLinkContainerAppears();
});

When('I activate the "Skip to Most Read" option', () => {
  mostReadPage.pressEnter();
});
Then('the URL should contain "#most-read-container"', async () => {
  await mostReadPage.changedURL();
});

Given('I open the Al Jazeera livestream page', async () => {
  I.amOnPage('/live');
  I.wait(2);
});

Then('I should see the video player', async () => {
  await livePage.seeVideoPlayer();
});

Then('I should see the Switch Player button', async () => {
  await livePage.seeSwitchPlayerButton();
});