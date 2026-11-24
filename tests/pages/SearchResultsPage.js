import BasePage from '#framework/ui/page/BasePage.js';
import { Label, TextBox, Button } from '#framework/ui/elements/index.js';

export default class SearchResultsPage extends BasePage {
  constructor(page) {
    super(new Label(page.getByRole('heading', { name: 'Search results'}), 'City Weather Page unique element'), 'City Weather Page');
    this.getResult = (number) => new Label(page.locator('div.searchcap a').nth(number), 'Page Header')
    
  }

  async getPageHeaderText() {
    return await this.pageHeader.getText();
  }

  async chooseFirstOption(number){
    await this.getResult(number - 1).click();
  }

}
