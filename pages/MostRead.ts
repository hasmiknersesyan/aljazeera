/// <reference types="codeceptjs" />
/// <reference path="../steps.d.ts" />
/// <reference path="../types/codecept-augment.d.ts" />

import { Locators } from '../support/locators';

export default class MostRead {
    private I: CodeceptJS.I;

    constructor(I: CodeceptJS.I) {
        this.I = I;
    }

    async isVisible(): Promise<boolean> {
        for (const candidate of [Locators.mostRead.containerById, ...Locators.mostRead.containerCandidates]) {
            const count = await this.I.grabNumberOfVisibleElements(candidate);
            if (count > 0) return true;
        }
        return false;
    }

    async assertVisible() {
        const visible = await this.isVisible();
        this.I.assertEqual(visible, true, '"Most Read" section should be visible');
    }

    async assertNotVisible() {
        const visible = await this.isVisible();
        this.I.assertEqual(visible, false, '"Most Read" section should NOT be visible on mobile');
    }

    async countItems(): Promise<number> {
        // try the strict selector first
        let items = await this.I.grabNumberOfVisibleElements(Locators.mostRead.items());
        if (items === 0) {
            // fallback: list items inside any “most read” candidate
            for (const candidate of Locators.mostRead.containerCandidates) {
                items = await this.I.grabNumberOfVisibleElements(`${candidate} li, ${candidate} a, ${candidate} article`);
                if (items > 0) break;
            }
        }
        return items;
    }

    async assertHasExactly(count: number) {
        const items = await this.countItems();
        this.I.assertEqual(
            items,
            count,
            `Expected "Most Read" to have ${count} posts, but found ${items}`
        );
    }

    async assertUrlHasAnchor() {
        const url = await this.I.grabCurrentUrl();
        this.I.assertOk(url.includes('#most-read-container'), `URL should contain '#most-read-container' but was ${url}`);
    }
}
