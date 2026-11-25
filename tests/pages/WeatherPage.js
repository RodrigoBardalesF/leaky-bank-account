import BasePage from '#framework/ui/page/BasePage.js';
import { ElementsList, Label, TextBox, Button } from '#framework/ui/elements/index.js';

export default class WeatherPage extends BasePage {
  constructor(page) {
    super(new Label(page.getByRole('heading', { name: 'World Temperatures and Weather Around The World'}), 'Weather Page unique element'), 'Weather Page');
    this.page = page;
    this.searchInput = new TextBox(page.locator('input.tad-input__input'), 'Search textbox');
    this.searchResultList = new ElementsList(page.locator('div.as ul.asu li a').filter({ hasText: /./ }),'Search Results list', Button); 

  }

  async waitForDropdownApear(timeout) {
    await this.page.locator('div.as ul.asu li a').first().waitFor({ state: 'visible', timeout: timeout });
  }

  async inputText(text){
    await this.searchInput.typeText(text);
  }

  async clickElementByNumber(number) {
    const targetElement = this.page.locator('div.as ul.asu li a').filter({ hasText: /./ }).nth(number - 1);  
    await targetElement.waitFor({ state: 'visible', timeout: 15000 });   
    await targetElement.click();
  }

}
