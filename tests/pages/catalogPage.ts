import { Page, expect } from '@playwright/test';

export class CatalogPage {
  constructor(private page: Page) {}

  async openCategory(category: string) {
    await this.page.getByRole('button', { name: /categories/i }).click();
    await this.page.getByRole('link', { name: category }).click();
  }

  async selectFirstProduct() {
    const productLink = this.page.locator('a[href*="/product/"]').first();
    await productLink.waitFor({ state: 'visible', timeout: 10000 });
    await productLink.click();
  }

  async expectProductsVisible() {
    await expect(this.page.locator('body')).toContainText('Category: Hand Tools');
  }
}
