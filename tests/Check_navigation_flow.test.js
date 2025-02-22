import { test, expect } from '@playwright/test';
test('UI Test - Check Navigation to Inventory Page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Check if redirected to inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // Click on a product
    await page.click('.inventory_item:first-child a');
    await expect(page).toHaveURL(/inventory-item/);
});
