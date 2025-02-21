import { test, expect } from '@playwright/test';

test('Verify products page loads in under 3 seconds', async ({ page }) => {
  const startTime = Date.now();
  await page.goto('https://www.saucedemo.com/inventory.html');
  const loadTime = Date.now() - startTime;
  console.log('Page load time (ms):', loadTime);
  expect(loadTime).toBeLessThan(3000);
});
