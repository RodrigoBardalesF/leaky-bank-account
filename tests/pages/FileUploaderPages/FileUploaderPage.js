import BasePage from '#framework/ui/page/BasePage.js';
import { Label, FileInput, Button } from '#framework/ui/elements/index.js';

export default class FileUploaderPage extends BasePage {
  constructor(browser) {
    super(new Label(browser.page.getByRole('heading', { name: 'File Uploader' }), 'File Uploader'), 'File Uploader Page');
    this.browser = browser;
    this.page = browser.page;
    this.fileInput = new FileInput(browser.page.locator('#file-upload'), 'File input');
    this.uploadButton = new Button(browser.page.getByRole('button', { name: 'Upload' }), 'Upload button');
  }

  async uploadFile(filePath) {
    await this.fileInput.uploadFile(filePath);
    await this.uploadButton.click();
  }
}
