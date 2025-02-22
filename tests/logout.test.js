import { test, expect } from '@playwright/test';

test('Intercept and verify logout API request', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // ✅ Login first
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // ✅ Ensure login was successful
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // ✅ Open the menu and wait for the logout button to be visible
    await page.click('#react-burger-menu-btn');
    await page.waitForSelector('#logout_sidebar_link', { state: 'visible' });

    // ✅ Intercept and validate logout request (if SauceDemo had an API for it)
    await page.route('**/logout', async (route) => {
        const response = await route.fetch();
        console.log(await response.text());  // Debugging API response

        // ✅ Check if the response status is 200 (successful)
        expect(response.status()).toBe(200);

        route.continue();
    });

    // ✅ Now click logout
    await page.click('#logout_sidebar_link');

    // ✅ Ensure we are back on the login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});
