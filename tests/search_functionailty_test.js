import { test, expect } from '@playwright/test';

test('Verify search functionality', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    await page.fill('.search-bar', 'Sauce Labs Backpack');
    
    // Check if the product appears
    await expect(page.locator('.inventory_item_name')).toContainText('Sauce Labs Backpack');
});
