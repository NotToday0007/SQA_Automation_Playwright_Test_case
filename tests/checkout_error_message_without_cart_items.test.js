import { test, expect } from '@playwright/test';

test('Verify checkout error message without filling details', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('.inventory_item button'); // Add an item to cart
    await page.click('.shopping_cart_link');
    await page.click('.checkout_button');
    await page.click('#continue');

    await expect(page.locator('.error-message-container')).toContainText('Error: First Name is required');
});
