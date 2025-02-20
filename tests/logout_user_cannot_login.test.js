import { test, expect } from '@playwright/test';

test('Locked out user should not be able to login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Use locked-out user credentials
    await page.fill('#user-name', 'locked_out_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Verify error message appears
    await expect(page.locator('.error-message-container')).toContainText('Sorry, this user has been locked out.');
});
