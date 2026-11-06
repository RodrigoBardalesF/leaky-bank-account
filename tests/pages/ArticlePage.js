import BasePage from '#framework/ui/page/BasePage.js';
import { Button, Label } from '#framework/ui/elements/index.js';

export default class ArticlePage extends BasePage {
  constructor(page) {
    super(new Label(page.locator('#firstHeading'), 'Article page unique element'), 'Article Page');
    this.page = page;
    this.toolButton = new Button(page.locator('#vector-page-tools-dropdown-checkbox'),'Button to click on dropdown for tools');
    this.downloadAsPdfButton = new Button(page.getByRole('link', { name: 'Download as PDF' }),'Button to download PDF');
    this.pageInfoButton = new Button(page.getByRole('link', { name: 'Page Information' }),'Button dto go to page information');
    this.getHeader = new Label(page.locator('#firstHeading'),'Main header of page');
  }

  async clickToolsMenuButton() {
    await this.toolButton.click();
  }

  async clickDownloadAsPdfButton() {
    await this.downloadAsPdfButton.click();
  }

  async clickPageInfoButton() {
    await this.pageInfoButton.click();
  }

  async getMainHeader(){
    return await this.getHeader.getText();
  }
}

