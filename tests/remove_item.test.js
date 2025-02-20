import { test, expect } from '@playwright/test';

test('Remove an item from the cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Add an item to the cart
    await page.click('button[id^="add-to-cart"]');

    // Go to cart
    await page.click('.shopping_cart_link');

    // Remove item from cart
    await page.click('button[id^="remove"]');

    // Verify cart is empty
    await expect(page.locator('.cart_item')).toHaveCount(0);
});
