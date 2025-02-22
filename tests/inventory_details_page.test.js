import { test, expect } from '@playwright/test';

test('Verify user can open inventory item details', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('.inventory_item_name'); // Click on first product
  
  await expect(page.locator('.inventory_details_desc')).toBeVisible();
});
