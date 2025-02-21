import { test, expect } from '@playwright/test';

test('Verify Facebook link opens correctly after login', async ({ page, context }) => {
    // Step 1: Navigate to the login page
    await page.goto('https://www.saucedemo.com/');

    // Step 2: Enter login credentials
    await page.fill('#user-name', 'standard_user');  // Replace with your username
    await page.fill('#password', 'secret_sauce');    // Replace with your password
    await page.click('#login-button');

    // Step 3: Wait for redirection to inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // Step 4: Ensure the footer is visible
    await page.waitForSelector('footer', { state: 'visible' });

    // Step 5: Click the Facebook link and verify redirection
    const facebookSelector = 'footer a[href*="facebook.com"]';

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),  // Wait for a new tab to open
        page.locator(facebookSelector).click()
    ]);

    // Step 6: Wait for the new page to load
    await newPage.waitForLoadState('load');

    // Step 7: Verify the new page's URL contains Facebook
    await expect(newPage).toHaveURL(/facebook\.com\/saucelabs/);
});
