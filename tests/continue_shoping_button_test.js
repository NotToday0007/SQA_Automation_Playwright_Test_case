test('Continue shopping from cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Go to cart
    await page.click('.shopping_cart_link');
    await page.click('#continue-shopping');

    // Verify user is back on inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
