import { testWithAuth, expect } from '#framework/ui/fixtures/browser.fixture.js';
import ConfigReader from '#framework/utils/ConfigReader.js';
import BasicAuthPage from './pages/BasicAuthPage.js';
import MainPage from './pages/MainPage.js';

testWithAuth('should perform Basic Auth action', async ({ customBrowser: browser }) => {
  const testData = ConfigReader.getTestData();
  const mainPage = new MainPage(browser.page);
  await mainPage.waitForPageToLoad()
  // Navigate to 'Basic Auth'
  await mainPage.clickNavigationLink("Basic Auth")

  const basicAuth = new BasicAuthPage(browser.page);
  // Verify that the success message is displayed
  expect(await BasicAuthPage.getSuccessMessage()).toEqual(testData.successfulBasicAuthMessage);


});
