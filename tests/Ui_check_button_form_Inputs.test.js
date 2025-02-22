import { test, expect } from '@playwright/test';
test('UI Test - Check Login Form Elements', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Check if username & password fields are visible
    await expect(page.locator('#user-name')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    
    // Ensure login button is enabled
    const loginButton = page.locator('#login-button');
    await expect(loginButton).toBeEnabled();

    // Fill inputs and verify values
    await page.fill('#user-name', 'test_user');
    await page.fill('#password', 'test_password');
    expect(await page.inputValue('#user-name')).toBe('test_user');
    expect(await page.inputValue('#password')).toBe('test_password');
});
