import { test, expect } from '@playwright/test';

test('Verify cart persists after page refresh', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('.inventory_item button'); // Add product to cart
  await page.reload(); // Refresh page

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});
