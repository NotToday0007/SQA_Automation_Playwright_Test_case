import { test, expect } from '@playwright/test';

test('Verify back to products button returns to inventory', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('.inventory_item_name >> nth=0');
    await page.click('#back-to-products');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
