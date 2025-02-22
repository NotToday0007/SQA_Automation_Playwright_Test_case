import { test, expect } from '@playwright/test';

test('Login page should match visual snapshot', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  // Take a snapshot and compare
  expect(await page.screenshot()).toMatchSnapshot('login-page.png');
});
