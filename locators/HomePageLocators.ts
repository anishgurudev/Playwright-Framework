//✔ Function-based locators = no stale issue
import { Page, Locator } from '@playwright/test';

export class HomePageLocators {

  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  searchBar():Locator{
    return this.page.getByRole('combobox', { name: /search/i })  //👉 /search/i = case-insensitive → stable
  }

  searchInput(): Locator {
    return this.page.getByPlaceholder('Search');
  }

  searchButton(): Locator {
    return this.page.locator('button:has-text("Search")');
  }

  productList(): Locator {
    return this.page.locator('.product-item');
  }

  dynamicProduct(name: string): Locator {
    return this.page.locator(`text=${name}`);
  }
}

