import { test, expect } from '@playwright/test';

test('Verify out-of-stock item displays "Sold Out"', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    const soldOutItem = await page.locator('.inventory_item:has-text("Test.allTheThings() T-Shirt (Red)")');
    
    await expect(soldOutItem.locator('.inventory_item_desc')).toContainText('OUT OF STOCK');
});
