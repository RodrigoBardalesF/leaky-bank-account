import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import MainPage from '../pages/MainPage.js';
import UploadedFilesPage from '../pages/FileUploaderPages/UploadedFilesPage.js';
import FileUploaderPage from '../pages/FileUploaderPages/FileUploaderPage.js';

const mainPage = this.getPage(MainPage);
const linkName = '';
const file = 'test.txt';

When('I click on the link to go to the File Upload Page', async function (linkName) {
  await mainPage.typeSearchRequest(linkName);
  await mainPage.searchClick();
  await mainPage.waitForPageToLoad(); 
  expect(await mainPage.isPageOpened()).toBe(true); 
});


When('I click on the link to go to the File Download Page', async function (filePath) {
  const uploadPage = this.getPage(FileUploaderPage);
  await uploadPage.waitForPageToLoad(); 
  expect(await uploadPage.isPageOpened()).toBe(true); 
  await uploadPage.uploadFile(filePath);
});

Then('I check the download file path', async function () {
  const fileUploadedPage = this.getPage(UploadedFilesPage);
  const fileName = fileUploadedPage.getUploadedFileName();
  expect(await fileName).toEqual(file);
});