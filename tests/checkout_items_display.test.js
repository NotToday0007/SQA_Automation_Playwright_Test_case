import { test, expect } from '@playwright/test';

test('Verify user can add an item to the cart and see it in the cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Click the first "Add to Cart" button
    await page.click('.inventory_item button');

    // Verify cart badge appears with '1'
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toBeVisible();
    await expect(cartBadge).toHaveText('1');

    // Open the cart
    await page.click('.shopping_cart_link');

    // Verify the item is in the cart
    await expect(page.locator('.cart_item')).toBeVisible();
});
