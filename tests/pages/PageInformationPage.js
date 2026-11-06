import BasePage from '#framework/ui/page/BasePage.js';
import { Label } from '#framework/ui/elements/index.js';

export default class ArticlePage extends BasePage {
  constructor(page) {
    super(new Label(page.locator('#firstHeading'), 'Information page unique element'), 'Information Page');
    this.page = page;
    this.InformationPage = new Label(page.locator('#mw-pageinfo-article-id td'));
    
  }

  async getInfoID() {
    return await this.InformationPage.getText();
  }
}

