import { test, expect } from '@playwright/test';

test('Intercept and verify add-to-cart request', async ({ page }) => {
  await page.route('**/cart.json', async (route) => {
    const response = await route.fetch();
    expect(response.status()).toBe(200);
    route.continue();
  });

  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.click('button[id^="add-to-cart"]');

    // Click on the cart icon
    await page.click('.shopping_cart_link');

});
