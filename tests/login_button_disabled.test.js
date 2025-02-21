import { test, expect } from '@playwright/test';

test('Verify login button is disabled without input', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    const isDisabled = await page.locator('#login-button').isDisabled();
    
    expect(isDisabled).toBeTruthy();
});
