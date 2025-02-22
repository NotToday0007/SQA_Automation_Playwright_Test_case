import { test, expect } from '@playwright/test';

test('User should be able to login using keyboard navigation', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  await page.keyboard.type('standard_user');
  await page.keyboard.press('Tab');
  await page.keyboard.type('secret_sauce');
  await page.keyboard.press('Enter');

  // Verify successful login
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
