import { defineConfig, devices } from "@playwright/test";
import config from "./config/config.json";
console.log("Base URL from config:", config.baseURL);
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",

  timeout: 30_000, // ⏱ Each test max duration
  globalTimeout: 3_600_000, // 🌐 Entire test suite max duration
  expect: {
    timeout: 5_000, // ✅ Each assertion (expect)
  },

  use: {
    actionTimeout: 10_000, // 🖱 Click, fill, select etc.
    navigationTimeout: 30_000, // 🚀 page.goto(), page.reload()
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: config.baseURL, // ✅ from config

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "retain-on-failure-and-retries",
    headless: config.headless, // ✅ from config
    screenshot: "only-on-failure",
    // video: 'retain-on-failure',
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 2, // retry on CI : local
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 2, // worker on CI : local
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  // ✅ Custom report folder
  reporter: [
    ["list"],
    ["html", { outputFolder: "reports", open: "never" }], // always or never
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    {
      name: "Google Chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
