import { test, expect } from '@playwright/test';

test('Check for mixed content security issue', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    const requests = [];
    page.on('request', request => {
        if (request.url().startsWith('http://')) {
            requests.push(request.url());
        }
    });

    // Wait for page to load completely
    await page.waitForLoadState('load');

    // Ensure no HTTP requests are made
    expect(requests.length).toBe(0);
    console.log('No mixed content issues found:', requests);
});
