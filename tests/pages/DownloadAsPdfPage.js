import BasePage from '#framework/ui/page/BasePage.js';
import { Label, Button } from '#framework/ui/elements/index.js';

export default class DownloadAsPdfPage extends BasePage {
  constructor(browser) {
    super(new Label(browser.page.getByRole('heading', { name: 'Download as PDF' }), 'Download as PDF page unique element'), 'Download as PDF Page');
    this.browser = browser;
    this.page = browser.page;
    this.fileNameLabel =  new Label(browser.page.locator('div.mw-electronpdfservice-selection-label-desc'), 'File name label');
    this.downloadButton = new Button(browser.page.getByRole('button', {name:'Download'}), 'Button to download file');
  }

  async getFileName() {
    return await this.fileNameLabel.getText();
  }

  async downloadFile(fileName){
    return await this.browser.downloadAndSave(async () => 
      await this.downloadButton.click(),
    fileName
    );
  }
}
