import { test, expect } from '@playwright/test';

test('Verify checkout completes successfully', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('.inventory_item button'); // Add an item to cart
    await page.click('.shopping_cart_link');
    await page.click('.checkout_button');

    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');

    await page.click('#finish');

    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
