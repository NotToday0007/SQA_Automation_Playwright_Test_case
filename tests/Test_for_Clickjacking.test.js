import { test, expect } from '@playwright/test';

test('Detect Clickjacking vulnerability', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    const isBlocked = await page.evaluate(() => {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true; // Access denied means it's protected
        }
    });

    expect(isBlocked).toBe(false); // If true, it is vulnerable to Clickjacking
    console.log('Clickjacking Protection:', isBlocked ? 'Enabled' : 'Vulnerable');
});
