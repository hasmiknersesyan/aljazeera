import { setHeadlessWhen } from '@codeceptjs/configure';
import * as dotenv from 'dotenv';

dotenv.config();
setHeadlessWhen(process.env.HEADLESS === 'true');

export const config: CodeceptJS.MainConfig = {
  name: 'aljazeera-tests',
  output: './output',
  tests: './features/*.feature',
  helpers: {
    WebDriver: {
      url: process.env.BASE_URL || 'https://www.aljazeera.com/',
      smartWait: 5000,
      browser: 'chrome',
      restart: false,
      windowSize: 'maximize',
      timeouts: { script: 60000, 'page load': 10000 },
      desiredCapabilities: {
        chromeOptions: {
          args: [
            '--no-sandbox',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--remote-allow-origins=*',
            '--window-size=1440,900'
          ]
        }
      }
    }
  },
  gherkin: {
    features: './features/*.feature',
    steps: ['./steps/step_definitions.ts']
  },
  plugins: {
    screenshotOnFail: { enabled: true },
    retryFailedStep: { enabled: true },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: 'output/allure'
    }
  }
};

export default config;
