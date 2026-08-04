import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/');
    await this.page.getByText('Sign in').click();
  }

  async login(email: string, password: string) {
    await this.page.locator('#email').fill(email);
    await this.page.locator('#password').fill(password);
    await this.page.locator('input[type="submit"]').click();
  }

  async expectFormVisible() {
    await expect(this.page.locator('#email')).toBeVisible();
    await expect(this.page.locator('#password')).toBeVisible();
    await expect(this.page.locator('input[type="submit"]')).toBeVisible();
  }
}
