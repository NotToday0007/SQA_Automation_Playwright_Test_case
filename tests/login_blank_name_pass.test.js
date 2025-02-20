import { test, expect } from '@playwright/test';
test('Login with blank username and password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.click('#login-button');

    // Verify error message appears
    await expect(page.locator('.error-message-container')).toContainText('Username is required');
});
