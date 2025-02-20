test('Sort products from Low to High price', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Sort products
    await page.selectOption('.product_sort_container', 'lohi');

    // Verify sorting applied
    const prices = await page.$$eval('.inventory_item_price', elements => elements.map(el => parseFloat(el.textContent.replace('$', ''))));
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
});
