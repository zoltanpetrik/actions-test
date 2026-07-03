const { test, expect } = require('@playwright/test');

test('homepage loads', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Dummy App');
  await expect(page.getByRole('heading', { name: 'Hello from dummy app 3' })).toBeVisible();
});