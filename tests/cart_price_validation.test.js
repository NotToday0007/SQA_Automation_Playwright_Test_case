import { test, expect } from '@playwright/test';

test('Verify item price in inventory and cart match', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    const itemPrice = await page.locator('.inventory_item_price').first().textContent();
    
    await page.click('.inventory_item button'); // Add to cart
    await page.click('.shopping_cart_link');

    const cartPrice = await page.locator('.inventory_item_price').first().textContent();
    
    expect(cartPrice).toBe(itemPrice);
});
