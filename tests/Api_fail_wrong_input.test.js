import { test, expect } from '@playwright/test';

test('Mock failed login API response', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Enter invalid credentials
    await page.fill('#user-name', 'invalid_user');
    await page.fill('#password', 'wrong_password');
    await page.click('#login-button');

    // Fix: Match the exact error message from SauceDemo
    const errorMessage = await page.locator('[data-test="error"]').textContent();
    expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
});
