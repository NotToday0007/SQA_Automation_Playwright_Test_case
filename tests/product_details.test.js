import { test, expect } from '@playwright/test';

test('Product details page should display correct information', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Click on the first product name
  const productName = await page.locator('.inventory_item_name').first().innerText();
  await page.locator('.inventory_item_name').first().click();

  // Verify the product details page opened
  await expect(page.locator('.inventory_details_name')).toHaveText(productName);
  await expect(page).toHaveURL(/inventory-item.html/);
});
