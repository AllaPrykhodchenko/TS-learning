import test, { expect } from '@playwright/test';

test('Checkboxes test', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/radio.html');

  //Approach 1
  const checkboxes = ['#vfb-6-0', '#vfb-6-1', '#vfb-6-2'];

for (const selector of checkboxes) {
  const checkbox = page.locator(selector);
  await checkbox.check();
  await expect(checkbox).toBeChecked();
}

for (const selector of checkboxes) {
  const checkbox = page.locator(selector);
  await checkbox.uncheck();
  await expect(checkbox).not.toBeChecked();
}

//Approach 2
const allCheckboxes = page.locator('input[type="checkbox"][name="webform"]');
const count = await allCheckboxes.count();

for (let i = 0; i < count; i++) {
  const checkbox = allCheckboxes.nth(i);
  await checkbox.check();
  await expect(checkbox).toBeChecked();
}

for (let i = 0; i < count; i++) {
  const checkbox = allCheckboxes.nth(i);
  await checkbox.uncheck();
  await expect(checkbox).not.toBeChecked();
}

});