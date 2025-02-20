import { test, expect } from '@playwright/test';

test('Verify sorting high to low', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    await page.selectOption('.product_sort_container', { value: 'hilo' });

    const prices = await page.$$eval('.inventory_item_price', prices => prices.map(p => parseFloat(p.textContent.replace('$', ''))));
    
    expect(prices).toEqual([...prices].sort((a, b) => b - a));
});
