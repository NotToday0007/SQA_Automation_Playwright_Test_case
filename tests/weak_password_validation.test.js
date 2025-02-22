import { test, expect } from '@playwright/test';

test('Weak password validation', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', '123'); // Weak password
    await page.click('#login-button');

    // Check if the login fails
    const errorText = await page.textContent('[data-test="error"]');
    expect(errorText).toContain('Epic sadface');
});
