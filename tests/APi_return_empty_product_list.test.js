import { test, expect } from '@playwright/test';

test('Mock empty inventory response', async ({ page }) => {
  await page.route('**/inventory.json', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([])
    });
  });

  await page.goto('https://www.saucedemo.com/inventory.html');
  
  // Ensure that no products are displayed
  expect(await page.locator('.inventory_item').count()).toBe(0);
});
