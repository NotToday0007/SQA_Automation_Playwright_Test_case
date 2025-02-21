import { test, expect } from '@playwright/test';

test('Verify that each product has a description', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  const descriptions = await page.$$eval('.inventory_item_desc', elems =>
    elems.map(el => el.textContent.trim())
  );
  descriptions.forEach(desc => {
    expect(desc.length).toBeGreaterThan(0);
  });
});
