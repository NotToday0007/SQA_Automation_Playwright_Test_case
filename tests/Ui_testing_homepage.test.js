import { test, expect } from '@playwright/test';

test('UI Test - Homepage Screenshot', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    // Capture a full-page screenshot
    await page.screenshot({ path: 'homepage.png', fullPage: true });

    // ✅ Optionally compare with a baseline (if using Playwright's snapshot feature)
    expect(await page.screenshot()).toMatchSnapshot('homepage-baseline.png');
});
