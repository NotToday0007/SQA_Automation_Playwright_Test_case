import { test, expect } from '@playwright/test';

test('Verify cart icon redirects to cart page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('.shopping_cart_link');

    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
});
