import BasePage from '#framework/ui/page/BasePage.js';
import { Label, Button, ElementsList, TextBox, Checkbox } from '#framework/ui/elements/index.js';

export default class PersonalClockPage extends BasePage {
  constructor(page) {
    super(new Label(page.getByRole('heading', { name: 'Personal World Clock'}), 'Personal world clock Page unique element'), 'Weather Page');
    this.page = page;
    this.addClockButton = new Button(page.locator('button.c-toolbar__btn.c-toolbar__btn--add'), 'Add clock button');
    this.searchInput = new TextBox(page.locator('input[name="addtxt"]'), 'Search textbox');
    this.searchResultList = new ElementsList(page.locator('div.po ul.asu li a').filter({ hasText: /./ }),'Search Results list', Button);
    this.saveButton =  new Button(page.locator('input[value="Save"]'), 'Save Button');
    this.nameOfClock = (text) => new Label(page.locator('a.c-city__name', { hasText: text }));

    this.configurationButton = new Button(page.locator('button[title="Configuration"]'),'Settings button');
    this.showTimeZoneNameCheckbox = new Checkbox(page.getByText('Show Time Zone Name'),'Checkbox to change TZN');
    this.closeButton = new Label(page.getByText('Show Time Zone Name'),'Close button for settings');

    this.timeZoneCityLabel =(abbreviation)=> new Label(page.locator(`a[href*="/time/zones/${abbreviation.toLowerCase()}"]`),`TZN locator ${abbreviation}`);
  }
  async addNewClockButton() {
    await this.addClockButton.click();
  }

  async inputText(text){
    await this.searchInput.setText(text);
  }

  async clickElementByNumber(number) {
    const targetLocator = this.searchResultList.nth(number - 1);
    await targetLocator.waitFor({ state: 'attached', timeout: 10000 });
    await targetLocator.click();
    await this.saveButton.locator.waitFor({ state: 'enabled', timeout: 5000 });
    await this.saveButton.click();
  }

  async verifyClockName(text){
    return await this.nameOfClock(text).getText();
  }

  async activateTimeZoneName(){
    await this.configurationButton.click();
    await this.showTimeZoneNameCheckbox.check();
    await this.closeButton.click();
  }

  async verifyCityTZName(abbreviation){
    return await this.timeZoneCityLabel(abbreviation).getText();
  }

}
