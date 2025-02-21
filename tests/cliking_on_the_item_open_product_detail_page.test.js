import { test, expect } from '@playwright/test';

test('Verify product details page opens when clicking on a product', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('.inventory_item_name >> nth=0');

    // Verify the URL contains the product details page
    await expect(page).toHaveURL(/inventory-item/);
});
