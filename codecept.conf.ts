import { setHeadlessWhen } from '@codeceptjs/configure';
import * as dotenv from 'dotenv';

dotenv.config();
setHeadlessWhen(process.env.HEADLESS === 'true');

// Define MainConfig interface to avoid TypeScript error
interface MainConfig {
  name: string;
  output: string;
  tests: string;
  helpers: any;
  gherkin: any;
  plugins: any;
}

export const config: Partial<MainConfig> = {
  name: 'aljazeera-tests',
  output: './output',
  tests: './features/*.feature',
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
// Define profiles for desktop and mobile testing
export const profiles = {
  desktop: {
    helpers: {
      WebDriver: {
        windowSize: '1440x900'
      }
    }
  },
  mobile: {
    helpers: {
      WebDriver: {
        windowSize: '375x667', // iPhone 8 size
        desiredCapabilities: {
          'goog:chromeOptions': {
            args: ['--no-sandbox', '--disable-gpu', '--mobile-emulation']
          }
        }
      }
    }
  }
};

export default config;
