// @ts-check
import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
import FileUtils from '#framework/utils/FileUtils.js';
import ArticlePage from './pages/ArticlePage';
import DownloadAsPdfPage from './pages/DownloadAsPdfPage';
import WikipediaMainPage from './pages/WikipediaMainPage';
import ConfigReader from '#framework/utils/ConfigReader.js';

test('Download PDF', async ({customBrowser: browser}) => {
  const data = ConfigReader.getTestData();
  const expectedFileName = data.downloadFileName;

  const mainPage = new WikipediaMainPage(browser.page);
  mainPage.waitForPageToLoad();
  expect(await mainPage.isPageOpened()).toBe(true);

  await mainPage.selectEnglishLanguage();
  await mainPage.typeSearchRequest('Albert Einstein');
  await mainPage.searchClick();

  const articlePage = new ArticlePage(browser.page);
  articlePage.waitForPageToLoad();
  expect(await articlePage.isPageOpened()).toBe(true);

  await articlePage.clickToolsMenuButton();
  await articlePage.clickDownloadAsPdfButton();

  const downloadAsPdfPage = new DownloadAsPdfPage(browser.page);
  downloadAsPdfPage.waitForPageToLoad();
  expect(await downloadAsPdfPage.isPageOpened()).toBe(true);
  await downloadAsPdfPage.getFileName();
  const filePath = await downloadAsPdfPage.downloadFile(expectedFileName);
  
  expect( await FileUtils.isFileExists(filePath)).toBe(true);
});
