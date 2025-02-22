import { test, expect } from '@playwright/test';

test('Intercept login API request', async ({ page }) => {
  await page.route('**/login', async (route) => {
    const response = await route.fetch();
    const jsonResponse = await response.json();
    
    console.log(jsonResponse);  // Debug API response
    
    // Ensure login API is called properly
    expect(response.status()).toBe(200);
    route.continue();
  });

  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
});
