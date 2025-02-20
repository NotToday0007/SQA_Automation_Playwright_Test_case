import { test, expect } from '@playwright/test';

test('Verify Remember Me functionality', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    // Assume the 'Remember Me' checkbox exists
    await page.check('#remember-me-checkbox');

    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // Logout
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    // Verify username field is still filled
    const usernameField = await page.inputValue('#user-name');
    expect(usernameField).toBe('standard_user');
});
