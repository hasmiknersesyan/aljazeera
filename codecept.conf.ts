import { setHeadlessWhen } from '@codeceptjs/configure';
import * as dotenv from 'dotenv';

dotenv.config();
setHeadlessWhen(process.env.HEADLESS === 'true');

const IS_DESKTOP = process.env.CODECEPT_PROFILE !== 'mobile';

const baseConfig = {
  tests: './dist/steps/*.js',
  timeout: 120000,
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.aljazeera.com',
      browser: 'chrome',
      smartWait: 8000,
      waitForTimeout: 15000,
      restart: false,
      keepBrowserState: false,
      windowSize: IS_DESKTOP ? '1440x900' : '375x812',
      chromeOptions: IS_DESKTOP
        ? { args: ['--disable-gpu', '--no-sandbox'] }
        : {
            mobileEmulation: { deviceName: 'iPhone X' },
            args: ['--disable-gpu', '--no-sandbox']
          }
    }
  },
  include: {
    I: './steps/hooks.ts',
    HomePage: './dist/pages/HomePage.js',
    MostRead: './dist/pages/MostRead.js',
    LivePage: './dist/pages/LivePage.js'
  },
  gherkin: {
    features: './features/*.feature',
    steps: ['./dist/steps/step_definitions.js']
  },
  plugins: {
    retryFailedStep: { enabled: true },
    screenshotOnFail: { enabled: true },
    pauseOnFail: { enabled: false },
    tryTo: { enabled: true },
    retryTo: { enabled: true },
    wdio: {
      enabled: true,
      services: ['chromedriver']
    },
    allure: {
      enabled: true,
      outputDir: 'output/allure',
      useCucumberStepReporter: true
    }
  }
};

export = baseConfig;

// Profiles:
// CODECEPT_PROFILE=desktop (default) → 1440×900
// CODECEPT_PROFILE=mobile → iPhone X emulation (375×812)