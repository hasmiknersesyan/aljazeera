# aljazeera

# CodeceptJS + WebDriver + BDD + Allure (Al Jazeera assignment)

This project automates:
- **A. Al Jazeera Home → "Most Read"**
  - Desktop visible
  - Desktop has exactly 10 posts
  - Mobile: not visible
  - Accessibility: "Bypass Blocks / Skip to Most Read" changes URL to `/#most-read-container`
- **B. Al Jazeera Live Page**
  - Player is visible
  - "Switch Player" button is visible

## Stack
- CodeceptJS (WebDriver helper / WebdriverIO)
- TypeScript
- Allure Reporting
- Chromedriver (no standalone Selenium needed)

## Prereqs
- Node.js 18+ and npm
- Chrome installed

## Setup
```bash
git clone https://github.com/hasmiknersesyan/aljazeera
cd ./aljazeera
cp .env  
npm i
```

## Test Run
```bash
npm run bdd:desktop
npm run bdd:livestream
npm run test:all
```
