import { test, expect } from '@playwright/test';

test('Detect JavaScript console errors', async ({ page }) => {
    const errors = [];
    
    page.on('console', message => {
        if (message.type() === 'error') {
            errors.push(message.text());
        }
    });

    await page.goto('https://www.saucedemo.com/');

    // Ensure there are no JS console errors
    expect(errors.length).toBe(0);
    console.log('Console Errors:', errors);
});
