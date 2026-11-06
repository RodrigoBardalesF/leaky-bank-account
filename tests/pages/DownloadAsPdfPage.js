import BasePage from '#framework/ui/page/BasePage.js';
import { Label, Button } from '#framework/ui/elements/index.js';

export default class DownloadAsPdfPage extends BasePage {
  constructor(page) {
    super(new Label(page.getByRole('heading', { name: 'Download as PDF' }), 'Download as PDF page unique element'), 'Download as PDF Page');
    this.page = page;
    this.fileNameLabel =  new Label(page.locator('div#mw-electronpdfservice-selection-label-desc'), 'File name label');
    this.downloadButton = new Button(page.locator('button.oo-ui-inputWidget-input oo-ui-buttonElement-button'));
  }

  async getFileName() {
    return await this.fileNameLabel.getText();
  }

  async downloadFile(fileName){
    return await this.page.browser.downloadAndSave(async () => 
      await this.downloadButton.click(),
    fileName
    );
  }
}
