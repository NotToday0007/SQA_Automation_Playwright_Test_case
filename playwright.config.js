import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'Chrome',
      use: { browserName: 'chromium', channel: 'chrome' }, // Run tests in Chrome
    },
    // {
    //   name: 'Edge',
    //   use: { browserName: 'chromium', channel: 'msedge' }, // Run tests in Edge
    // },
  ],
});
