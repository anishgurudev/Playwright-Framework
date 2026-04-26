import { Page } from '@playwright/test';
import { RetryUtils } from '../utils/RetryUtils';

export class BasePage {

  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  // Wrapper to handle flaky UI
  async safeAction(action: () => Promise<void>) {
    await RetryUtils.retry(action);
  }
}
//👉 Your: BaseTest + reusable logic