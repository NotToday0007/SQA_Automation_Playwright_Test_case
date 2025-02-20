import { test, expect } from '@playwright/test';

test('Verify adding multiple items to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    await page.click('button:has-text("Add to cart") >> nth=0');
    await page.click('button:has-text("Add to cart") >> nth=1');
    
    await page.click('.shopping_cart_link');
    
    await expect(page.locator('.cart_item')).toHaveCount(2);
});
