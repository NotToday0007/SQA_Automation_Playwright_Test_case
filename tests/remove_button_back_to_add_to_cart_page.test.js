import { test, expect } from '@playwright/test';

test('Verify "Remove" button changes back to "Add to Cart" after removing product', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  const addToCartButton = page.locator('.inventory_item button').first();
  await addToCartButton.click();

  const removeButton = page.locator('.btn_secondary');
  await expect(removeButton).toHaveText('Remove');

  await removeButton.click();
  await expect(addToCartButton).toHaveText('Add to cart');
});
