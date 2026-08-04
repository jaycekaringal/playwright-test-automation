import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/cart');
  }

  async continueToCheckout() {
    await expect(this.page.locator('body')).toContainText('Practice Black Box Testing');
  }

  async expectItemVisible() {
    await expect(this.page.locator('body')).toContainText('Practice Black Box Testing');
  }
}
