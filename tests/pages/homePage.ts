import { Page, expect } from '@playwright/test';
import { resolveUrl } from '../support/baseUrl';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto(resolveUrl('/'));
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
