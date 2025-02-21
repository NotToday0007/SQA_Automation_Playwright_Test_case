import { test, expect } from '@playwright/test';

test('User should be able to add multiple items to the cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Add the first two items to the cart
  const addToCartButtons = await page.locator('.inventory_item button').all();
  await addToCartButtons[0].click();
  await addToCartButtons[1].click();

  // Verify cart count shows "2"
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
});
