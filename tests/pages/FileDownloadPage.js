import BasePage from '#framework/ui/page/BasePage.js';
import { Label } from '#framework/ui/elements/index.js';
import Browser from '#framework/ui/browser/Browser.js';

export default class FileDownloadPage extends BasePage {
  constructor(browser) {
    super(new Label(browser.page.getByRole('heading', { name: 'File Downloader' }), 'File Download Page unique element'), 'File Download Page');
    this.browser = browser;
    this.page = browser.page;
    this.fileLabel = (fileName) => new Label(this.page.getByRole('link', { name: fileName, exact: true }), 'File label');
  }

  async isFileLabelDisplayed(fileName) {
    return await this.fileLabel(fileName).waitForDisplayed();
  }

  async clickDownloadFile(fileName) {
    return await this.browser.downloadAndSave(async ()=> {
      await this.fileLabel(fileName).click()}, 
    fileName
    );
  }
};
