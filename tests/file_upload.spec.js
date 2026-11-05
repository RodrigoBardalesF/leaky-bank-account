// @ts-check
import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
import MainPage from './pages/MainPage.js';
import FileUploaderPage from './pages/FileUploaderPages/FileUploaderPage.js';
import ConfigReader from '#framework/utils/ConfigReader.js';
import UploadedFilesPage from './pages/FileUploaderPages/UploadedFilesPage.js';

test('Upload file and check its correct',async ({customBrowser: browser})=>{

  const testData = ConfigReader.getTestData();

  const fileName = testData.fileForUpload;
  const submittedFileName = testData.submittedFileName;
    
  const mainPage = new MainPage(browser.page);
  await mainPage.waitForPageToLoad();
  expect(await mainPage.isPageOpened()).toBe(true);

  await mainPage.clickNavigationLink('File Upload');

  const uploadFile = new FileUploaderPage(browser);
  await uploadFile.waitForPageToLoad();
  expect(await uploadFile.isPageOpened()).toBe(true);

  await uploadFile.uploadFile(fileName);

  const uploadedFile = new UploadedFilesPage(browser);
  await uploadedFile.waitForPageToLoad();
  expect(await uploadedFile.isPageOpened()).toBe(true);

  const uploadedFileName = await uploadedFile.getText();
  expect(uploadedFileName).toEqual(submittedFileName);

});
