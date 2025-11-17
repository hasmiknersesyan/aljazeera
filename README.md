# Al Jazeera CodeceptJS BDD Testing Framework

A CodeceptJS-based BDD test automation framework designed to validate functionality on aljazeera.com. The project automates testing of the "Most Read" section and live streaming features using WebdriverIO with TypeScript, featuring Allure reporting for comprehensive test result visualization.

## Test Coverage

### Part A: Most Read Section
- **Desktop visibility**: Verify the "Most Read" section appears on desktop viewports
- **Content validation**: Ensure exactly 10 posts are displayed
- **Mobile behavior**: Confirm the section is hidden on mobile screens (375x812)
- **Accessibility**: Test "Skip to Most Read" bypass block functionality that navigates to `/#most-read-container`

### Part B: Live Streaming
- **Player visibility**: Verify video player is visible on the live page
- **Switch Player button**: Ensure the "Switch Player" button is accessible

## Technology Stack
- **Framework**: CodeceptJS 3.7.5 with Gherkin/BDD support
- **Browser Automation**: WebdriverIO 9.20.0
- **Language**: TypeScript 5.9.3
- **Testing Target**: https://aljazeera.com
- **Reporting**: Allure 2.34.1
- **Browser Driver**: Chromedriver 141.0.3
- **Runtime**: Node.js 18+

## Project Structure
```
.
├── features/                    # Gherkin BDD feature files
│   ├── most_read.feature       # Part A: Most Read section tests
│   └── live.feature            # Part B: Livestream tests
├── step_definitions/
│   └── steps.ts                # Step implementations for Gherkin scenarios
├── pages/                       # Page object models
│   ├── most_read.ts            # Most Read page interactions
│   └── live.ts                 # Livestream page interactions
├── output/                      # Test execution reports and artifacts
├── codecept.conf.ts            # CodeceptJS configuration
├── tsconfig.json               # TypeScript compiler configuration
└── package.json                # Project dependencies and scripts
```

## Prerequisites
- **Node.js**: 18 or higher
- **npm**: Latest version
- **Chrome**: Installed on your system

## Installation & Setup
```bash
# Clone the repository
git clone https://github.com/hasmiknersesyan/aljazeera
cd aljazeera

# Install dependencies
npm install

# Set up environment variables (if needed)
cp .env.example .env
```

## Available Commands

### Test Execution
```bash
# Run Most Read tests (Part A) with @bypass tag
npm run bdd:bypass

# Run Livestream tests (Part B) with @live tag
npm run bdd:livestream

# Run all tests (both Part A and Part B)
npm run test:all

# Run all BDD tests with detailed steps
npm run test:bdd
```

### Allure Reporting
```bash
# Clean previous Allure reports
npm run allure:clean

# Generate Allure HTML report from test results
npm run allure:generate

# Open the generated Allure report in browser
npm run allure:open
```

## Configuration

### CodeceptJS Configuration (`codecept.conf.ts`)
- **Base URL**: https://aljazeera.com
- **Browser**: Chrome
- **Output Directory**: `./output`
- **Plugins Enabled**:
  - Screenshot on failure
  - HTML reporting
  - Failed step retry
  - Element iteration
  - Pause on fail
- **Step Timeout**: Infinite (0) with specific overrides for wait and amOnPage patterns

### TypeScript Configuration (`tsconfig.json`)
- **Target**: ES2018
- **Module**: CommonJS
- **Strict Null Checks**: Disabled
- **Type Libraries**: CodeceptJS and Node.js

## Test Execution Flow

1. **Most Read Section Tests** (`features/most_read.feature`):
   - Open Al Jazeera homepage
   - Test desktop visibility (1920x1080)
   - Verify 10 posts are displayed
   - Test mobile hiding (375x812)
   - Test accessibility bypass blocks (Tab + Enter)

2. **Livestream Tests** (`features/live.feature`):
   - Open Al Jazeera livestream page (`/live`)
   - Verify video player visibility
   - Verify Switch Player button visibility

## Step Definitions

Steps are implemented in `step_definitions/steps.ts` and follow Gherkin conventions:

- **Given**: Setup preconditions (open pages, set viewports)
- **When**: Execute user actions (resize windows, press keys, click elements)
- **Then**: Assert expected outcomes (element visibility, URL changes)

## Page Objects

### MostReadPage (`pages/most_read.ts`)
- Selectors for Most Read container, articles list, bypass links
- Methods for visibility checks, article count validation, accessibility testing

### LivePage (`pages/live.ts`)
- Selectors for video player and Switch Player button
- Methods for element visibility verification

## Debugging & Development

### Interactive Testing
The CodeceptJS UI helper is available for interactive test debugging:
```bash
npx codeceptjs ui
```

### Output Artifacts
Test results, screenshots, and HTML reports are generated in the `./output` directory during test execution.

## Notes
- Tests use responsive viewport sizes: Desktop (1920x1080) and Mobile (375x812)
- All waits are configured with infinite timeouts to prevent premature test failures
- Screenshots are automatically captured on test failures
- Failed steps are automatically retried based on plugin configuration
