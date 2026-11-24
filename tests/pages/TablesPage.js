import BasePage from '#framework/ui/page/BasePage.js';
import { Label } from '#framework/ui/elements/index.js';
import { ElementsList } from '#framework/ui/elements/helpers/ElementsList.js';

export default class TablesPage extends BasePage {
  
  constructor(browser) {
    super(new Label(browser.page.getByRole('heading', { name: 'Data Tables' }), 'Unique header'), 'Sortable Data Tables');
    this.browser = browser;
    this.page = browser.page; 
    this.dueCells = new ElementsList(
      browser.page.locator('#table1 td:nth-child(4)'),
      'Due column cells',
      Label
    );
  }

  async getDueColumnValues() {
    return await this.dueCells.getAllTexts();
  }
}