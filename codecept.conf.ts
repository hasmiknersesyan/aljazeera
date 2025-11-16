exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: ' https://aljazeera.com/',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file',
    MostReadPage: "./pages/most_read.ts",
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.ts']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    htmlReporter: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.ts',
  name: 'aljazeera'
}