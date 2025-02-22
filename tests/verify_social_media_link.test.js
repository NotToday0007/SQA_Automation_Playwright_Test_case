import { test, expect } from '@playwright/test';

test('API Test - Fetch product list', async ({ request }) => {
  const response = await request.get('https://www.saucedemo.com/inventory.json');
  
  expect(response.status()).toBe(200);

  const products = await response.json();
  console.log(products);
  expect(products.length).toBeGreaterThan(0);
});
