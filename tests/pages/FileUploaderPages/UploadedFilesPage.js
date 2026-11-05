import BasePage from '#framework/ui/page/BasePage.js';
import { Label } from '#framework/ui/elements/index.js';

export default class UploadedFilesPage extends BasePage {
  constructor(browser){
    super(new Label(browser.page.getByRole('heading', { name: 'File Uploaded' }), 'File Uploaded page'), 'File Uploaded');
    this.browser = browser;
    this.page = browser.page;    
    this.uploadedFile = new Label(browser.page.locator('#uploaded-files'),'Uploaded file name');
  }
  async getText(fileName){
    return await this.uploadedFile.getText(fileName);
  }

}
