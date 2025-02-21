import { test, expect } from '@playwright/test';

test('Verify clicking a product name opens the details page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Click on the first product name
  await page.click('.inventory_item_name >> nth=0');
  await expect(page).toHaveURL(/inventory-item/);
});
