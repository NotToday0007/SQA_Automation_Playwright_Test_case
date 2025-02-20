import { test, expect } from '@playwright/test';

test('Sort products from high to low price', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Sort items by "Price (high to low)"
    await page.selectOption('.product_sort_container', 'hilo');

    // Get all item prices
    const prices = await page.$$eval('.inventory_item_price', items => 
        items.map(item => parseFloat(item.innerText.replace('$', '')))
    );

    // Verify prices are sorted in descending order
    for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
    }
});
