# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: file_upload.spec.js >> Upload file and check its correct
- Location: tests/file_upload.spec.js:12:1

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

Expected: "tests/resources/test.txt"
Received: "test.txt"
```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - text: The Internet
  - generic [ref=f2e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/saucelabs/the-internet
      - img "Fork me on GitHub" [ref=f2e5] [cursor=pointer]
    - generic [ref=f2e7]:
      - heading "File Uploaded!" [level=3] [ref=f2e8]
      - generic [ref=f2e9]: test.txt
  - generic [ref=f2e12]:
    - text: Powered by
    - link "Elemental Selenium" [ref=f2e13] [cursor=pointer]:
      - /url: http://elementalselenium.com/
    - text: and
    - link "Sauce Labs" [ref=f2e14] [cursor=pointer]:
      - /url: https://saucelabs.com/
```

# Test source

```ts
  1  | // @ts-check
  2  | import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
  3  | import MainPage from './pages/MainPage.js';
  4  | import FileUploaderPage from './pages/FileUploaderPages/FileUploaderPage.js';
  5  | import ConfigReader from '#framework/utils/ConfigReader.js';
  6  | import UploadedFilesPage from './pages/FileUploaderPages/UploadedFilesPage.js';
  7  | import Browser from '#framework/ui/browser/Browser.js';
  8  | import path from 'path';
  9  | 
  10 | 
  11 | 
  12 | test('Upload file and check its correct',async ({customBrowser: browser})=>{
  13 | 
  14 |   const testData = ConfigReader.getTestData();
  15 | 
  16 |   const fileName = testData.submitFileName;
  17 |   const filePath = path.join(browser._downloadDir, fileName);
  18 |     
  19 |   const mainPage = new MainPage(browser.page);
  20 |   await mainPage.waitForPageToLoad();
  21 |   expect(await mainPage.isPageOpened()).toBe(true);
  22 | 
  23 |   await mainPage.clickNavigationLink('File Upload');
  24 | 
  25 |   const uploadFile = new FileUploaderPage(browser);
  26 |   await uploadFile.waitForPageToLoad();
  27 |   expect(await uploadFile.isPageOpened()).toBe(true);
  28 | 
  29 |   await uploadFile.uploadFile(testData.fileForUpload);
  30 | 
  31 |   const uploadedFile = new UploadedFilesPage(browser);
  32 |   await uploadedFile.waitForPageToLoad();
  33 |   expect(await uploadedFile.isPageOpened()).toBe(true);
  34 | 
  35 |   const uploadedFileName = await uploadedFile.getText(fileName);
> 36 |   expect(uploadedFileName).toEqual(fileName);
     |                            ^ Error: expect(received).toEqual(expected) // deep equality
  37 | 
  38 | });
  39 | 
```