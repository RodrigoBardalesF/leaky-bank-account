// @ts-check
import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
import FramesPage from './pages/FramePages/FramesPage.js';
import NestedFramesPage from './pages/FramePages/NestedFramesPage.js';
import MainPage from './pages/MainPage.js';
import ConfigReader from '#framework/utils/ConfigReader.js';


test('interact with text in Nested Frame', async ({ customBrowser: browser }) => {
  const data = ConfigReader.getTestData();
  const leftFrameText = data.leftFrameText;
  const rightFrameText = data.rightFrameText;

  const mainPage = new MainPage(browser.page);
  mainPage.waitForPageToLoad();
  expect(await mainPage.isPageOpened()).toBe(true);
  
  await mainPage.clickNavigationLink('Nested Frames');

  const nestedFramesPage = new NestedFramesPage(browser.page);
  nestedFramesPage.waitForPageToLoad();
  expect(await nestedFramesPage.isPageOpened()).toBe(true);

  expect(nestedFramesPage.leftFrameLabel).toEqual(leftFrameText);
  expect(nestedFramesPage.rightFrameLabel).toEqual(rightFrameText);

});
