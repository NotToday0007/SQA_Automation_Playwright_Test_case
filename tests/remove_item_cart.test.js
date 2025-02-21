import { test, expect } from '@playwright/test';

test('Verify removing an item from the cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('.inventory_item button'); // Add to cart
    await page.click('.shopping_cart_link'); // Open cart
    await page.click('.cart_button'); // Click "Remove"

    await expect(page.locator('.cart_item')).not.toBeVisible();
});
