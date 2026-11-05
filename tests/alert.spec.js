// @ts-check
import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
import MainPage from './pages/MainPage.js';
import JavaScriptAlertsPage from './pages/JavaScriptAlertsPage.js';
import ConfigReader from '#framework/utils/ConfigReader.js';

test('successful message should be displayed after alert handling', async ({ customBrowser: browser }) => {
  const testData = ConfigReader.getTestData();

  const mainPage = new MainPage(browser.page);
  await mainPage.waitForPageToLoad();
  expect(await mainPage.isPageOpened()).toBe(true);
  await mainPage.clickNavigationLink('JavaScript Alerts');

  const javaScriptAlertsPage = new JavaScriptAlertsPage(browser);
  await javaScriptAlertsPage.waitForPageToLoad();
  expect(await javaScriptAlertsPage.isPageOpened()).toBe(true);

  await javaScriptAlertsPage.clickForJSAlertButton();
  expect(await javaScriptAlertsPage.getResultText()).toEqual(testData.successfulAlertMessage);
});
