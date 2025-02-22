import { test, expect } from '@playwright/test';

test('Check security headers', async ({ request }) => {
    const response = await request.get('https://www.saucedemo.com/');
    const headers = response.headers();

    // Check if Content-Security-Policy (CSP) exists
    expect(headers).toHaveProperty('content-security-policy');

    // Check for X-Frame-Options to prevent clickjacking
    expect(headers['x-frame-options']).toBe('DENY');

    console.log('Security headers:', headers);
});
