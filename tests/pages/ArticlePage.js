import BasePage from '#framework/ui/page/BasePage.js';
import { Button, Label, Dropdown } from '#framework/ui/elements/index.js';

export default class ArticlePage extends BasePage {
  constructor(page) {
    super(new Label(page.getByRole('heading',{name:'Albert Einstein'}), 'Article page unique element'), 'Article Page');
    this.page = page;
    this.toolButton = new Button(page.locator('#vector-page-tools-dropdown-checkbox'));
    this.downloadAsPdfButton = new Button(page.locator('#coll-download-as-rl'));
  }

  async clickToolsMenuButton() {
    await this.toolButton.click();
  }

  async clickDownloadAsPdfButton() {
    await this.downloadAsPdfButton.click();
  }
}
