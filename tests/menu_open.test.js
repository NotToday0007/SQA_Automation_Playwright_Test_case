import { test, expect } from '@playwright/test';

test('Verify clicking the menu button opens the sidebar', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('#react-burger-menu-btn');
    
    await expect(page.locator('.bm-menu-wrap')).toBeVisible();
});
