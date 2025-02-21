
import { test, expect } from '@playwright/test';
test('Check Twitter signup name field character limit', async ({ page }) => {
    await page.goto('https://twitter.com/i/flow/signup');
    
    // Click 'Create account' button
    await page.getByRole('button', { name: 'Create account' }).click();
    
    // Wait for the name field to be visible
    await page.waitForSelector('[name="name"]');

    // Type 60 characters
    const longText = 'A'.repeat(60);
    await page.locator('[name="name"]').type(longText);

    // Get actual input value
    const actualValue = await page.locator('[name="name"]').inputValue();

    // Check if it stops at 50 characters
    console.log('Actual Input Length:', actualValue.length);
    expect(actualValue.length).toBe(50);
});
