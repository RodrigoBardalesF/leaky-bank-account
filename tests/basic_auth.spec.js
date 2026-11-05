import { testWithAuth, expect } from '#framework/ui/fixtures/browser.fixture.js';
import ConfigReader from '#framework/utils/ConfigReader.js';
import BasicAuthPage from './pages/BasicAuthPage.js';
import MainPage from './pages/MainPage.js';

testWithAuth('should perform Basic Auth action', async ({ customBrowser: browser }) => {
  const testData = ConfigReader.getTestData();
  const mainPage = new MainPage(browser.page);
  await mainPage.waitForPageToLoad();
  await mainPage.clickNavigationLink('Basic Auth');

  const basicAuth = new BasicAuthPage(browser);
  expect(await basicAuth.getSuccessMessage()).toEqual(testData.successfulBasicAuthMessage);


});
