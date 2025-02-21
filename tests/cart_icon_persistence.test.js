import { test, expect } from '@playwright/test';

test('Cart icon should persist item count after navigation', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Add an item to the cart
  await page.click('.inventory_item button');

  // Navigate away and come back
  await page.click('.shopping_cart_link');
  await page.click('.inventory_item_name'); // Click on an item to go to details page
  await page.goBack();

  // Verify cart count is still correct
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});
