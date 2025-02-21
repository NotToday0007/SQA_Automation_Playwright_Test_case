import { test, expect } from '@playwright/test';

test('Verify cart icon updates when adding an item', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('.inventory_item button'); // Add an item to cart

    // Check if cart icon shows "1"
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});
