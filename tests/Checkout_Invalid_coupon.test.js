import { test, expect } from '@playwright/test';

test('Verify invalid coupon at checkout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    await page.click('.shopping_cart_link');
    await page.click('.checkout_button');

    await page.fill('#coupon_code', 'INVALIDCODE');
    await page.click('#apply-coupon');

    await expect(page.locator('.error-message-container')).toContainText('Invalid coupon');
});
