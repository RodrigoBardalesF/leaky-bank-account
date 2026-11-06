import { Button, Dropdown, TextBox, Label } from '#framework/ui/elements/index.js';
import BasePage from '#framework/ui/page/BasePage.js';

export default class WikipediaMainPage extends BasePage {
  constructor(page) {
    super(new Label(page.locator('body#www-wikipedia-org'), 'main page unique element'), 'Main Page');
    this.page = page;
    this.searchLanguage =  new Dropdown(page.locator('#searchLanguage'), 'Search language dropdown');
    this.searchTextBox = new TextBox(page.locator('input#searchInput'), 'Search textbox');
    this.searchButton = new Button(page.getByRole('button', {name:'Search'}), 'Search button');
  }

  async selectEnglishLanguage() {
    await this.searchLanguage.selectOption('English');
  }
  
  async selectSpanishLanguage() {
    await this.searchLanguage.selectOption('Español');
  }

  async typeSearchRequest(text) {
    await this.searchTextBox.setText(text);
  }

  async searchClick() {
    await this.searchButton.click();
  }
}
