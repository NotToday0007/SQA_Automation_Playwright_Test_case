import { test, expect } from '@playwright/test';

test('Verify Forgot Password link', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.click('text=Forgot Password');
    
    // Verify it redirects to reset page (Assuming reset page exists)
    await expect(page).toHaveURL(/reset/);
});
