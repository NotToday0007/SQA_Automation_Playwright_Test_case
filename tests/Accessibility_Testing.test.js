import { test, expect } from '@playwright/test';


test('Accessibility Test - Check Homepage', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Run accessibility scan
    const results = await new AxeBuilder({ page }).analyze();
    
    console.log(results.violations);
    expect(results.violations).toHaveLength(0);
});
