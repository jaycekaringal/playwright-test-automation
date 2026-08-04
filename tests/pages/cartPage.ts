import { Page, expect } from '@playwright/test';
import { resolveUrl } from '../support/baseUrl';

export class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto(resolveUrl('/cart'));
  }

  async continueToCheckout() {
    await expect(this.page.locator('body')).toContainText('Practice Black Box Testing');
  }

  async expectItemVisible() {
    await expect(this.page.locator('body')).toContainText('Practice Black Box Testing');
  }
}
