const { I } = inject();
// Add in your custom step files


Given('I am on the aljazeera.com page', () => {
  I.amOnPage('/');
  I.wait(2);

});

When('I am on the aljazeera.com page', async () => {
  // const mustReadSection = 'h3[data-testid="branded-collection-title-bar"]';
  // I.waitForElement(mostReadSection, 5);
  // I.see('Most Read');
  console.log('I have Most Read article on the page');
});

Then('I should see the Most Read article', async () => {
  // I.seeElement('div[id=\"most-read-container\"]');
  // I.see('Must reads');

  const articleItems = 'h3[data-testid="branded-collection-title-bar"]';
  I.seeElement(articleItems);
});
