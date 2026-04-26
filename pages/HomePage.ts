import { Page } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { HomePageLocators } from '../locators/HomePageLocators';
import { ActionUtils } from '../utils/ActionUtils';

export class HomePage extends BasePage {

  readonly locators: HomePageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new HomePageLocators(page);
  }

  async searchProduct(product: string) {
    const search = this.locators.searchBar()
    // await search.click();
    // await search.fill(product);
    // await search.press('Enter');

    // await ActionUtils.click(this.locators.searchBar())
    await ActionUtils.type(this.locators.searchInput(), product);
    // await ActionUtils.click(this.locators.searchButton());
    await this.locators.searchBar().press('Enter');
  }
  async getPlaceholderText(){
    const placeHolder= await this.locators.searchBar()

    return await ActionUtils.getText(this.locators.searchBar());
  }

  async selectProduct(product: string) {
    await this.safeAction(async () => {
      await ActionUtils.click(this.locators.dynamicProduct(product));
    });
  }

  async getProductCount(): Promise<number> {
    return await this.locators.productList().count();
  }


}