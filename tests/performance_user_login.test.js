import { test, expect } from '@playwright/test';

test('Verify performance glitch user can log in', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'performance_glitch_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
