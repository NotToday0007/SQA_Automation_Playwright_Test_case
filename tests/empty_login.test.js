import { test, expect } from '@playwright/test';

test('Login should fail when username and password are empty', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.click('#login-button');
  await expect(page.locator('.error-message-container')).toContainText(
    'Username is required'
  );
});
