// @ts-check
import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
import FileDownloadPage from './pages/FileDownloadPage.js';
import MainPage from './pages/MainPage.js';
import ConfigReader from '#framework/utils/ConfigReader.js';
import FileUtils from '#framework/utils/FileUtils.js';
import {join} from "path"

test('Check that file was downloaded', async ({ customBrowser: browser }) => {
  // Implement test case
  const testData = ConfigReader.getTestData();
  
  const mainPage = new MainPage(browser.page)
  await mainPage.waitForPageToLoad()
  await mainPage.clickNavigationLink("File Download")

  const filedownloadPage = new FileDownloadPage(browser)
  await filedownloadPage.waitForPageToLoad()

  await filedownloadPage.isFileLabelDisplayed(testData.downloadFileName)
  const filePath = await filedownloadPage.clickDownloadFile(testData.downloadFileName)

  await expect(FileUtils.isFileExists(filePath)).resolves.toBeTruthy()
  //await expect.poll(async () => await FileUtils.isFileExists(filePath)).toBeTruthy();

});
