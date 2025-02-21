import { test, expect } from '@playwright/test';

test('Verify that removing all items empties the cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Add two items to cart
  await page.click('button:has-text("Add to cart") >> nth=0');
  await page.click('button:has-text("Add to cart") >> nth=1');
  await page.click('.shopping_cart_link');

  // Remove both items
  const removeButtons = page.locator('button:has-text("Remove")');
  const count = await removeButtons.count();
  for (let i = 0; i < count; i++) {
    await removeButtons.nth(0).click();
  }
  
  await expect(page.locator('.cart_item')).toHaveCount(0);
});
