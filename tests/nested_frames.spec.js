// @ts-check
import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
import FramesPage from './pages/FramePages/FramesPage.js';
import NestedFramesPage from './pages/FramePages/NestedFramesPage.js';
import MainPage from './pages/MainPage.js';
import ConfigReader from '#framework/utils/ConfigReader.js';


test('interact with text in Nested Frame', async ({ customBrowser: browser }) => {
  const data = ConfigReader.getTestData()
  const leftFrameText = data.leftFrameText
  const rightFrameText = data.rightFrameText

  const mainPage = new MainPage(browser.page);
  await mainPage.clickNavigationLink('Frames');
  mainPage.waitForPageToLoad()
  expect(await mainPage.isPageOpened()).toBe(true)

  const framesPage = new FramesPage(browser.page);
  framesPage.waitForPageToLoad()
  expect(await framesPage.isPageOpened()).toBe(true)

  await framesPage.clickNestedFramesButton();

  const nestedFramesPage = new NestedFramesPage(browser.page);
  expect(nestedFramesPage.leftFrameLabel).toEqual(leftFrameText)
  expect(nestedFramesPage.rightFrameLabel).toEqual(rightFrameText)

  // Implement checks for left and right frame text

});
