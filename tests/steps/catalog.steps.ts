import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { CatalogPage } from '../pages/catalogPage';
import { ProductPage } from '../pages/productPage';
import { CartPage } from '../pages/cartPage';

test('user selects a catalog item, adds it to cart, and checks out', async ({ page }) => {
  const homePage = new HomePage(page);
  const catalogPage = new CatalogPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await homePage.open();
  await homePage.expectHomePageVisible();
  await catalogPage.openCategory('Hand Tools');
  await catalogPage.expectProductsVisible();
  await catalogPage.selectFirstProduct();
  await productPage.expectProductVisible();
  await productPage.addToCart();
  await cartPage.open();
  await cartPage.expectItemVisible();
  await cartPage.continueToCheckout();
});
