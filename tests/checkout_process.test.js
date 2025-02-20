import { test, expect } from '@playwright/test';

test('Complete the checkout process', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Add item to cart
    await page.click('button[id^="add-to-cart"]');
    await page.click('.shopping_cart_link');

    // Proceed to checkout
    await page.click('#checkout');

    // Fill in checkout details
    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');

    // Finish the order
    await page.click('#finish');

    // Verify checkout completion message
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
