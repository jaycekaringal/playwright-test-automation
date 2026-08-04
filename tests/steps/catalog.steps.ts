import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { CatalogPage } from '../pages/catalogPage';
import { ProductPage } from '../pages/productPage';
import { CartPage } from '../pages/cartPage';

let browser: Browser;
let page: Page;

Before(async () => {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
});

After(async () => {
  await browser.close();
});

Given('the user opens the home page', async () => {
  const homePage = new HomePage(page);
  await homePage.open();
  await homePage.expectHomePageVisible();
});

When('the user opens the Hand Tools category', async () => {
  const catalogPage = new CatalogPage(page);
  await catalogPage.openCategory('Hand Tools');
  await catalogPage.expectProductsVisible();
});

When('the user selects the first product', async () => {
  const catalogPage = new CatalogPage(page);
  await catalogPage.selectFirstProduct();
});

When('the user adds it to the cart', async () => {
  const productPage = new ProductPage(page);
  await productPage.expectProductVisible();
  await productPage.addToCart();
});

Then('the cart should contain the selected product', async () => {
  const cartPage = new CartPage(page);
  await cartPage.open();
  await cartPage.expectItemVisible();
});

Then('the user should be able to continue to checkout', async () => {
  const cartPage = new CartPage(page);
  await cartPage.continueToCheckout();
});
