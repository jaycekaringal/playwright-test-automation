import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async addToCart() {
    await this.page.getByRole('button', { name: /add to cart/i }).click();
  }

  async expectProductVisible() {
    await expect(this.page.locator('body')).toContainText('Add to cart');
  }
}
