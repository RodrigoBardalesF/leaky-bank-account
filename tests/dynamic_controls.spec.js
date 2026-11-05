// @ts-check
import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
import MainPage from './pages/MainPage.js';
import DynamicControlsPage from './pages/DynamicControlsPage.js';

const randomString = crypto.randomUUID();

test('Check state of Dynamic control', async ({ customBrowser: browser }) => {
  
  const mainPage = new MainPage(browser.page);
  await mainPage.waitForPageToLoad();
  expect(await mainPage.isPageOpened()).toBe(true);
  await mainPage.clickNavigationLink('Dynamic Controls');

  const dynamicControlsPage = new DynamicControlsPage(browser);
  await dynamicControlsPage.waitForPageToLoad();
  expect(await dynamicControlsPage.isPageOpened()).toBe(true);

  await dynamicControlsPage.clickEnableButton(); 
  
  await dynamicControlsPage.isInputFieldEnabled();

  await dynamicControlsPage.inputTextIntoInputField(randomString);
  const text = await dynamicControlsPage.getValueFromInputField();
  expect(text).toEqual(randomString);
});
