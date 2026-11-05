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
  
  await mainPage.clickNavigationLink('Frames');

  const framesPage = new FramesPage(browser);
  framesPage.waitForPageToLoad();
  expect(await framesPage.isPageOpened()).toBe(true);

  framesPage.clickNestedFramesButton();

  const nestedFramesPage = new NestedFramesPage(browser);
  nestedFramesPage.waitForPageToLoad();
  expect(await nestedFramesPage.isPageOpened()).toBe(true);

  expect(await nestedFramesPage.readLeftFrame()).toContain(leftFrameText);
  expect(await nestedFramesPage.readRightFrame()).toContain(rightFrameText);

});
