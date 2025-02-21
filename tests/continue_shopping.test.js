import { test, expect } from '@playwright/test';

test('Verify "Continue Shopping" button works', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Go to the cart page
  await page.click('.shopping_cart_link');
  await page.click('#continue-shopping');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
