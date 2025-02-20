import { test, expect } from '@playwright/test';

test('Logout from the application', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/', { timeout: 300000 });
0
    // Login with valid credentials
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // ✅ Wait for the URL to change instead of timeout
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // Open menu
    await page.click('#react-burger-menu-btn');

    // ✅ Wait for the logout button to be visible before clicking
    await page.waitForSelector('#logout_sidebar_link', { state: 'visible' });

    // Click logout
    await page.click('#logout_sidebar_link');

    // ✅ Ensure logout is successful by checking login page URL
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});
