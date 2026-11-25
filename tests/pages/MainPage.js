import BasePage from '#framework/ui/page/BasePage.js';
import { Label, Button, TextBox } from '#framework/ui/elements/index.js';

export default class MainPage extends BasePage {
  constructor(page) {
    super(new Label(page.getByText('Current Time', { exact: true }), 'Main Page Header'), 'Main Page');
    
    this.navigationLink = (text) => new Button(page.getByRole('link', { name: text, exact:true }), `Navigation link: ${text}`);
    
    this.searchButton = new Button(page.locator('i.i-search'), 'Search Button');
    this.searchField = new TextBox(page.getByPlaceholder('Search...'), 'Placeholder for searching');
    
  }

  async clickNavigationLink(navigationText) {
    await this.navigationLink(navigationText).click();
  }

  async searchSpecificCity(city) {
    await this.searchButton.click();
    await this.searchField.setText(city);
    await this.searchButton.click();
  }

}