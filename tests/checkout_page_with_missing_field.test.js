test('Checkout with missing fields', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Add item and go to checkout
    await page.click('.inventory_item:first-child .btn_inventory');
    await page.click('.shopping_cart_link');
    await page.click('#checkout');

    // Click continue without filling details
    await page.click('#continue');

    // Verify error message appears
    await expect(page.locator('.error-message-container')).toContainText('First Name is required');
});
