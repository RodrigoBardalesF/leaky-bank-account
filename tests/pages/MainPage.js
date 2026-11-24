import BasePage from '#framework/ui/page/BasePage.js';
import { Label, Button, TextBox, Dropdown } from '#framework/ui/elements/index.js';

export default class MainPage extends BasePage {
  constructor(page) {
    super(new Label(page.getByText('Current Time', {exact:true}), 'Main Page Header'), 'Main Page');
    this.navigationLink = (text) => new Label(page.locator('#nav').getByRole('listitem', { name: text, exact: true }), `Navigation link: ${text}`);
    this.menuLink = (text) => new Label(page.locator('#nav').getByRole('link', { name: text, exact: true }), `Navigation link: ${text}`);
    this.searchButton = new Button(page.locator('#site-nav-search-btn'), 'Search Button');
    this.searchField = new TextBox(page.getByPlaceholder('Search...'),'Placeholder for searching');

    this.personalWorldClockButton = new Dropdown(page.getByText('World Clock'),'Dropdown for world clock');

  }

  async clickNavigationLink(navigationText) {
    await this.navigationLink(navigationText).click();
  }

  async searchSpecificCity(city){
    await this.searchButton.click();
    await this.searchField.setText(city);
    await this.searchButton.click();
  }

  async enterIntoPersonalWorldClock(){
    this.personalWorldClockButton.selectOption('Personal World Clock');
  }
}
