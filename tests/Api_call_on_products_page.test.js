import { test, expect } from '@playwright/test';

test('Verify product API request', async ({ page }) => {
  await page.route('**/inventory.json', async (route) => {
    const response = await route.fetch();
    const jsonResponse = await response.json();
    
    console.log(jsonResponse); // Debug product response
    
    expect(response.status()).toBe(200);
    expect(jsonResponse.length).toBeGreaterThan(0);
    
    route.continue();
  });

  await page.goto('https://www.saucedemo.com/inventory.html');
});
