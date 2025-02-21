import { test, expect } from '@playwright/test';

test('Verify About page link redirects correctly', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Open the sidebar menu
    await page.click('#react-burger-menu-btn'); // Click on the menu button
    await page.waitForSelector('#about_sidebar_link'); // Wait for "About" link to appear
    await page.click('#about_sidebar_link') 

    // Verify new page URL
    await expect(page).toHaveURL('https://saucelabs.com/');

});
