import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import FileDownloadPage from '../pages/FileDownloadPage.js';
import FileUtils from '#framework/utils/FileUtils.js';


When('I click on the download button for {string}', async function (fileName) {
  const downloadFilePage = this.getPage(FileDownloadPage);
  expect(await downloadFilePage.isFileLabelDisplayed(fileName)).toBe(true);
  this.filePath = await downloadFilePage.clickDownloadFile(fileName);
});

Then('I check the download file path', async function () {
  expect(await FileUtils.isFileExists(this.filePath)).toBe(true);
});