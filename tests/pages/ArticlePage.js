import BasePage from '#framework/ui/page/BasePage.js';
import { Button, Label } from '#framework/ui/elements/index.js';

export default class ArticlePage extends BasePage {
  constructor(page) {
    super(new Label(page.getByRole('heading',{name:'Albert Einstein'}), 'Article page unique element'), 'Article Page');
    this.page = page;
    this.toolButton = new Label(page.getByRole('input',{name:'vector-page-tools-dropdown-checkbox'}));
    this.downloadAsPdfButton = new Button(page.locator('div.vector-menu-content ul li:nth-child(1) a'));
  }

  async clickToolsMenuButton() {
    await this.page.toolButton.click();
  }

  async clickDownloadAsPdfButton() {
    await this.downloadAsPdfButton.click();
  }
}
