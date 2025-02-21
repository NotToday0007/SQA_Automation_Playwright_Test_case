import { test, expect } from '@playwright/test';

test('Cart should be empty after logging out and logging back in', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Add an item to the cart
  await page.click('.inventory_item button');

  // Log out
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

  // Log back in
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Verify cart is empty
  await expect(page.locator('.shopping_cart_badge')).toBeVisible();
});
