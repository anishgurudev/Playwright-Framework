// 👉 Equivalent to your: SeleniumAction.java
import { Locator } from '@playwright/test';
import { Logger } from './Logger';

export class ActionUtils {

  static async click(element: Locator) {
    Logger.info('Clicking element');
    await element.click();
  }

  static async type(element: Locator, text: string) {
    Logger.info(`Typing: ${text}`);
    await element.fill(text);
  }

  static async getText(element: Locator): Promise<string> {
    return await element.textContent() || '';
  }
}