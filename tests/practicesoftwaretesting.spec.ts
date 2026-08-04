import { test, expect, Page } from '@playwright/test';

const adminEmail = process.env.ADMIN_EMAIL ?? '';
const adminPassword = process.env.ADMIN_PASSWORD ?? '';
const customerEmail = process.env.CUSTOMER_EMAIL ?? '';
const customerPassword = process.env.CUSTOMER_PASSWORD ?? '';

async function expectLoginFormVisible(page: Page) {
  await expect(page.locator('#email')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();
  await expect(page.locator('input[type="submit"]')).toBeVisible();
}

test('opens the Practice Software Testing homepage', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveURL(/practicesoftwaretesting\.com/);
  await expect(page).toHaveTitle(/Practice Software Testing/i);
  await expect(page.locator('body')).toContainText('Practice Black Box Testing');
});

test('admin credentials can be loaded from .env and populated in the login form', async ({ page }) => {
  test.skip(!adminEmail || !adminPassword, 'Missing admin credentials in .env');

  await page.goto('/');
  await page.getByText('Sign in').click();
  await expectLoginFormVisible(page);
  await page.locator('#email').fill(adminEmail);
  await page.locator('#password').fill(adminPassword);

  await expect(page.locator('#email')).toHaveValue(adminEmail);
  await expect(page.locator('#password')).toHaveValue(adminPassword);
});

test('customer credentials can be loaded from .env and populated in the login form', async ({ page }) => {
  test.skip(!customerEmail || !customerPassword, 'Missing customer credentials in .env');

  await page.goto('/');
  await page.getByText('Sign in').click();
  await expectLoginFormVisible(page);
  await page.locator('#email').fill(customerEmail);
  await page.locator('#password').fill(customerPassword);

  await expect(page.locator('#email')).toHaveValue(customerEmail);
  await expect(page.locator('#password')).toHaveValue(customerPassword);
});
