import { test, expect } from '@playwright/test';

test('loads the documented admin credentials from env into the login form', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign in').click();

  await expect(page.locator('#email')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();

  await page.locator('#email').fill(process.env.ADMIN_EMAIL ?? '');
  await page.locator('#password').fill(process.env.ADMIN_PASSWORD ?? '');

  await expect(page.locator('#email')).toHaveValue(process.env.ADMIN_EMAIL ?? '');
  await expect(page.locator('#password')).toHaveValue(process.env.ADMIN_PASSWORD ?? '');
});

test('loads the documented customer credentials from env into the login form', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign in').click();

  await expect(page.locator('#email')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();

  await page.locator('#email').fill(process.env.CUSTOMER_EMAIL ?? '');
  await page.locator('#password').fill(process.env.CUSTOMER_PASSWORD ?? '');

  await expect(page.locator('#email')).toHaveValue(process.env.CUSTOMER_EMAIL ?? '');
  await expect(page.locator('#password')).toHaveValue(process.env.CUSTOMER_PASSWORD ?? '');
});

test('loads the documented customer2 credentials from env into the login form', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign in').click();

  await expect(page.locator('#email')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();

  await page.locator('#email').fill(process.env.CUSTOMER2_EMAIL ?? '');
  await page.locator('#password').fill(process.env.CUSTOMER2_PASSWORD ?? '');

  await expect(page.locator('#email')).toHaveValue(process.env.CUSTOMER2_EMAIL ?? '');
  await expect(page.locator('#password')).toHaveValue(process.env.CUSTOMER2_PASSWORD ?? '');
});
