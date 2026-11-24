import BasePage from '#framework/ui/page/BasePage.js';
import { Label, FileInput, Button } from '#framework/ui/elements/index.js';

export default class FileUploaderPage extends BasePage {
  constructor(browser) {
    super(new Label(browser.page.getByText('File Uploader'), 'File Uploader page unique element'), 'File Uploader Page');
    this.fileInput = new FileInput(browser.page.locator('#file-upload'), 'File input');
    this.uploadButton = new Button(browser.page.locator('#file-submit'), 'Upload button');
  }

  async uploadFile(filePath) {
    await this.fileInput.uploadFile(filePath);
    await this.uploadButton.click();
  }
}
