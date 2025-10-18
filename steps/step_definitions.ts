/// <reference types="codeceptjs" />
/// <reference path="../steps.d.ts" />

import HomePage from '../pages/HomePage';
import MostRead from '../pages/MostRead';
import LivePage from '../pages/LivePage';
import { pressTabNTimes, waitForUrlFragment } from '../support/helpers';

// Use CommonJS import for Gherkin DSL (they’re global, not real ES exports)
const { Given, When, Then } = require('codeceptjs');

type ActorContext = { I: CodeceptJS.I };

let home: HomePage;
let mostRead: MostRead;
let live: LivePage;

/**
 * -------------------------
 *  HOME PAGE & MOST READ
 * -------------------------
 */

Given('I am on the Al Jazeera home page', async ({ I }: ActorContext) => {
  home = new HomePage(I);
  mostRead = new MostRead(I);
  await home.open();
});

When('I focus the page header to reveal accessibility skip links', async () => {
  await home.focusPageChromeWorkaround();
});

When('I open the Bypass Blocks menu via keyboard', async ({ I }: ActorContext) => {
  await pressTabNTimes(I, 1);
});

When('I click the "Skip to Most Read" menu item', async ({ I }: ActorContext) => {
  await I.click('//a[contains(., "Skip to Most Read")]');
  await waitForUrlFragment(I, '#most-read-container', 5);
});

Then('the "Most Read" section should be visible on desktop', async () => {
  await mostRead.assertVisible();
});

Then('the "Most Read" section should have {int} posts', async (count: number) => {
  await mostRead.assertHasExactly(count);
});

Then('the "Most Read" section should not appear on mobile', async () => {
  await mostRead.assertNotVisible();
});

Then('the URL should include the Most Read anchor', async () => {
  await mostRead.assertUrlHasAnchor();
});

/**
 * -------------------------
 *  LIVE PAGE (LIVESTREAM)
 * -------------------------
 */

Given('I am on the Al Jazeera live page', async ({ I }: ActorContext) => {
  live = new LivePage(I);
  await live.open();
});

Then('the Livestream player is visible', async () => {
  await live.assertPlayerVisible();
});

Then('the "Switch Player" button is visible in the Livestream player', async () => {
  await live.assertSwitchPlayerVisible();
});
