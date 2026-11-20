import { test as base } from '#framework/ui/fixtures/browser.fixture.js';
import * as allure from 'allure-js-commons';

export const test = base.extend({
  customBrowser: async ({ customBrowser }, use, testInfo) => {
    await use(customBrowser);

    if (testInfo.status !== testInfo.expectedStatus) {
      const screenshot = await customBrowser.page.screenshot();
      await allure.attachment('Screenshot', screenshot, 'image/png');

      const html = await customBrowser.page.content();
      await allure.attachment('Page Source', html, 'text/html');
    }
  },
});