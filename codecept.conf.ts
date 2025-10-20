import { setHeadlessWhen } from '@codeceptjs/configure';
import * as dotenv from 'dotenv';

dotenv.config();
setHeadlessWhen(process.env.HEADLESS === 'true');

export const config: Partial<CodeceptJS.MainConfig> = {
  name: 'aljazeera-tests',
  output: './output',
 tests: './_dummy/*.ts',
  helpers: {
    WebDriver: {

      url: 'https://www.aljazeera.com',
      browser: 'chrome',
      windowSize: '1440x900',
      smartWait: 8000,
      waitForTimeout: 10000,
      restart: false,
      keepBrowserState: false,
      ...({
        capabilities: {
          browserName: 'chrome',
          'goog:chromeOptions': {
            args: ['--no-sandbox', '--disable-gpu']
          }
        }
      } as any)
    },

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
      require: '@codeceptjs/allure-legacy', outputDir: 'output/allure'
    }
  }
};
export default config;
