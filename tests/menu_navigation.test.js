import { test, expect } from '@playwright/test';

test('Menu navigation should work correctly', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Open menu and navigate to "About"
  await page.click('#react-burger-menu-btn');
  await page.click('#about_sidebar_link');

  // Verify redirected to the correct page
  await expect(page).toHaveURL(/saucelabs.com/);
});
