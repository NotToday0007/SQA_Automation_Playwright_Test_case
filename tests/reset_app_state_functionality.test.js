import { test, expect } from '@playwright/test';

test('Verify Reset App State clears the cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('.inventory_item button'); // Add an item to cart
    await page.click('#react-burger-menu-btn');
    await page.click('#reset_sidebar_link');

    // Cart badge should disappear
    await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();
});
