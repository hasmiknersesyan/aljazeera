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
  await mostReadPage.seeMostReadArticles();
});

When('I resize the window to mobile size', () => {
  I.resizeWindow(375, 812);   // Mobile viewport (iPhone size)
  I.wait(2);
});

Then('the Most Read article should be hidden for mobile', async () => {
  await mostReadPage.checkNotVisibleForMobile();
});
