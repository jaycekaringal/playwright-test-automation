import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/');
  }

  async openSignIn() {
    await this.page.getByText('Sign in').click();
  }

  async expectHomePageVisible() {
    await expect(this.page).toHaveURL(/practicesoftwaretesting\.com/);
    await expect(this.page).toHaveTitle(/Practice Software Testing/i);
    await expect(this.page.locator('body')).toContainText('Practice Black Box Testing');
  }
}
