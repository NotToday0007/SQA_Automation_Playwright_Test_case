import { test, expect } from '@playwright/test';

test('Add an item to the cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Login with valid credentials
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Verify successful login
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // Click "Add to cart" button for the first item
    await page.click('button[id^="add-to-cart"]');

    // Click on the cart icon
    await page.click('.shopping_cart_link');

    // Verify item is in the cart
    await expect(page.locator('.cart_item')).toHaveCount(1);
});
