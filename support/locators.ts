export const Locators = {
    // Home / Most Read
    mostRead: {
        containerById: '#most-read-container',
        // Fallback robust container: uses data-section or aria landmarks if id changes
        containerCandidates: [
            '#most-read-container',
            '[id*="most-read"]',
            '[data-section="most-read"]',
            'section[aria-labelledby*="Most Read"]'
        ],
        items: () => `${Locators.mostRead.containerById} a, ${Locators.mostRead.containerById} li article, ${Locators.mostRead.containerById} li a`
    },

    // Skip links / Bypass block menu (accessibility)
    bypass: {
        skipToMostReadLink: '//a[contains(., "Skip to Most Read")]'
    },

    // Live page
    live: {
        playerRoot: 'section[id*="live"] video, #live-video, [data-component*="LivePlayer"], .video-js',
        switchPlayerBtn: '//button[contains(., "Switch Player")]'
    },

    // Clickable empty area near logo to focus page (left of logo)
    pageFocusAreaNearLogo: '//div[@role="banner"]//a[contains(@class, "logo")]/preceding-sibling::div[1]',
    header: 'header'
};
