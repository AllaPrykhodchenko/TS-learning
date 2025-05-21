import { test, expect } from '@playwright/test';

test('Example Domain page', async ({ page }) => {
  await page.goto('https://example.com/');

  const pageTitle = await page.title();
  expect(pageTitle).toBe('Example Domain');

  const pageUrl = await page.url();
  expect(pageUrl).toContain('example.com');

  const pageContent = await page.content();
  expect(pageContent).toMatch('This domain is for use in illustrative examples');

  await expect(page.locator('h1')).toHaveText('Example Domain');
});