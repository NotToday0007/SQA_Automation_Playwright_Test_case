import { test, expect } from '@playwright/test';

test('Verify checkout button is disabled when cart is empty', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('.shopping_cart_link'); // Open cart

    const isDisabled = await page.locator('.checkout_button').isDisabled();
    
    expect(isDisabled).toBeTruthy();
});
