import { test, expect } from '@playwright/test';

test('Verify footer text is displayed correctly', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    
    const footerText = await page.locator('.footer_copy').textContent();
    
    // Adjust the expected text to match the actual footer
    expect(footerText).toContain('Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
});
