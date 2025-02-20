import { test, expect } from '@playwright/test';
test('Complete purchase on checkout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Add item and go to checkout
    await page.click('.inventory_item:first-child .btn_inventory');
    await page.click('.shopping_cart_link');
    await page.click('#checkout');

    // Fill out checkout form
    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');

    // Click finish
    await page.click('#finish');

    // Verify success message
    await expect(page.locator('.complete-header')).toContainText('Thank you for your order!');
});
