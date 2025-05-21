import { test, expect } from '@playwright/test';

test('Playwright homepage', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  expect(page.url().startsWith('https://playwright.dev'));
  await expect(page.getByRole('link', { name : 'Get started'})).toHaveCount(1);
});