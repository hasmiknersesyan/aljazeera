/// <reference types="codeceptjs" />
/// <reference path="../steps.d.ts" />
/// <reference path="../types/codecept-augment.d.ts" />

import { Locators } from '../support/locators';

const LIVE_URL = '/live';
export default class LivePage {
    private I: CodeceptJS.I;

    constructor(I: CodeceptJS.I) {
        this.I = I;
    }


    async open() {
        this.I.amOnPage("https://www.aljazeera.com/live");
        await this.I.waitForElement(Locators.live.playerRoot, 1);
    }

    async assertPlayerVisible() {
        await this.I.seeElement(Locators.live.playerRoot);
    }

    async assertSwitchPlayerVisible() {
        // try visible button by text
        const cnt = await this.I.grabNumberOfVisibleElements(Locators.live.switchPlayerBtn);

    }
}
