import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

let browser: Browser;
let page: Page;

const credentialsByRole: Record<string, { email: string; password: string }> = {
  admin: {
    email: process.env.ADMIN_EMAIL ?? '',
    password: process.env.ADMIN_PASSWORD ?? '',
  },
  customer: {
    email: process.env.CUSTOMER_EMAIL ?? '',
    password: process.env.CUSTOMER_PASSWORD ?? '',
  },
  customer2: {
    email: process.env.CUSTOMER2_EMAIL ?? '',
    password: process.env.CUSTOMER2_PASSWORD ?? '',
  },
};

function credentialsFor(role: string) {
  const credentials = credentialsByRole[role];
  if (!credentials) {
    throw new Error(`No credentials configured for role "${role}"`);
  }
  return credentials;
}

Before(async () => {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
});

After(async () => {
  await browser.close();
});

Given('the user opens the sign in page', async () => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.expectFormVisible();
});

When('the user enters the {string} email and password', async (role: string) => {
  const { email, password } = credentialsFor(role);
  const loginPage = new LoginPage(page);
  await loginPage.login(email, password);
});

Then('the login form should accept the {string} values', async (role: string) => {
  const { email, password } = credentialsFor(role);
  await expect(page.locator('#email')).toHaveValue(email);
  await expect(page.locator('#password')).toHaveValue(password);
});
