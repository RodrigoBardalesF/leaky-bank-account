import { test as base } from '@playwright/test';
import * as allure from 'allure-js-commons';
import fs from 'fs/promises';

export const test = base.extend({
  page: async ({ page }, use, testInfo) => {
    await use(page);

    if (testInfo.status !== testInfo.expectedStatus) {
      const screenshot = await page.screenshot();
      await allure.attachment('Screenshot', screenshot, 'image/png');

      const html = await page.content();
      await allure.attachment('Page Source', html, 'text/html');
    }
  },
});