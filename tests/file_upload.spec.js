// @ts-check
import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
import MainPage from './pages/MainPage.js';
import FileUploaderPage from './pages/FileUploaderPages/FileUploaderPage.js';
import ConfigReader from '#framework/utils/ConfigReader.js';
import UploadedFilesPage from './pages/FileUploaderPages/UploadedFilesPage.js';
import Browser from '#framework/ui/browser/Browser.js';



test("Upload file and check it's correct",async ({customBrowser: browser})=>{

    const testData = ConfigReader.getTestData()

    const fileName = testData.submitFileName;

    const mainPage = new MainPage(browser.page)
    await mainPage.waitForPageToLoad()
    expect(await mainPage.isPageOpened()).toBe(true);

    await mainPage.clickNavigationLink("File Upload")

    const uploadFile = new FileUploaderPage(browser.page)
    await uploadFile.waitForPageToLoad()
    expect(await uploadFile.isPageOpened()).toBe(true);

    await uploadFile.uploadFile(testData.fileForUpload)

    const uploadedFile = new UploadedFilesPage(browser.page)
    await uploadedFile.waitForPageToLoad()
    expect(await uploadedFile.isPageOpened()).toBe(true);

    const uploadedFileName = await uploadedFile.getText(fileName)
    expect(uploadedFileName).toEqual(fileName)


})
// Implement test block
