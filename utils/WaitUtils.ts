// Playwright already auto-waits 
// → this is optional wrapper
import { Locator } from '@playwright/test';

export class WaitUtils {

  static async waitForVisible(element: Locator) {
    await element.waitFor({ state: 'visible' });
  }

  static async waitForHidden(element: Locator) {
    await element.waitFor({ state: 'hidden' });
  }
}