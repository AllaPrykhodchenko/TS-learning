import { test, expect } from '@playwright/test';

test('Login flow test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  const username = page.locator('#username');
  const password = page.locator('#password');
  const loginButton = page.locator('button');
  const pageHeading = page.locator('h2');
  const logoutButton = page.locator('i').filter({ hasText: 'Logout' });

  await username.fill('username');
  await loginButton.click();
  await expect(pageHeading).toHaveText('Login Page');

  await username.fill('tomsmith');
  await password.fill('SuperSecretPassword!');
  await loginButton.click();
  await expect(pageHeading).toHaveText('Secure Area');

  await logoutButton.click();
  await expect(pageHeading).toHaveText('Login Page');

});