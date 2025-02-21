import { test, expect } from '@playwright/test';

test('Verify sorting by name A-Z', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    await page.selectOption('.product_sort_container', { value: 'az' });

    const productNames = await page.$$eval('.inventory_item_name', items => items.map(i => i.textContent));
    
    expect(productNames).toEqual([...productNames].sort());
});