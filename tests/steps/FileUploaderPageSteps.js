import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import UploadedFilesPage from '../pages/FileUploaderPages/UploadedFilesPage.js';
import FileUploaderPage from '../pages/FileUploaderPages/FileUploaderPage.js';
import { join } from 'path';

const filePath = join(process.cwd(), 'tests/resources/test.txt');  

When('I upload the file', async function () {
  const uploadPage = this.getPage(FileUploaderPage);
  await uploadPage.waitForPageToLoad(); 
  expect(await uploadPage.isPageOpened()).toBe(true); 
  await uploadPage.uploadFile(filePath);
});

Then('I check the name of the uploaded file {string}', async function (expectedName) {
  const fileUploadedPage = this.getPage(UploadedFilesPage);
  const fileName = await fileUploadedPage.getUploadedFileName();
  expect(fileName).toEqual(expectedName);
});