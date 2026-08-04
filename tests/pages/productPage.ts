import { Page, expect } from '@playwright/test';

export class ProductPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addToCart() {
    await this.page.getByRole('button', { name: /add to cart/i }).click();
  }

  async expectProductVisible() {
    await expect(this.page.locator('body')).toContainText('Add to cart');
  }
}
