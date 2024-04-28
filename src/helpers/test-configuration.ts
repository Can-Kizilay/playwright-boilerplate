require('dotenv').config()

export const testConfig = {
  browser: process.env.BROWSER || 'chromium',
  baseUrl:  process.env.BASE_URL || 'https://playwright.dev/',
};

export const browserConfig = {
  headless: process.env.HEADLESS === 'true'? true : false,
  isMobile: process.env.IS_MOBILE === 'true'? true : false,
  viewport: { width: Number(process.env.VIEWPORT_WIDTH), height: Number(process.env.VIEWPORT_HEIGHT) }
  
}