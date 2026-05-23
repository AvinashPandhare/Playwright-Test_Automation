import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
// CI
await page.waitForTimeout(30000); // waits for 3 seconds0
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
await page.waitForTimeout(30000); // waits for 3 seconds
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
await page.waitForTimeout(30000); // waits for 3 seconds
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
