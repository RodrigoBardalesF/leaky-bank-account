import BasePage from '#framework/ui/page/BasePage.js';
import { Label, Dropdown } from '#framework/ui/elements/index.js';

export default class SearchedCityPage extends BasePage {
  constructor(page) {
    super(new Label(page.getByRole('heading', { name: 'Current Local Time in'}), 'City weather unique element'), 'City Weather Page');
    this.weatherButton = new Label(page.getByRole('link', { name: 'Weather', description: 'Current weather and forecast' }), 'Weather button');
    this.settingsButton = new Label(page.locator('i.i-settings'), 'Settings button');
    this.chooseTemperatureDropdown = new Dropdown(page.locator('#fut'), 'Settings button');
    this.temperatureLabel = new Label(page.locator('div.h2'), 'Text to check the tag for the temperature type')
  }

  async openSettings(){
    await this.weatherButton.click();
    await this.settingsButton.click();
  }

  async chooseTemperature(temperature){
    await this.chooseTemperatureDropdown.selectOption(temperature);
  }

  async checkTemperatureText(){
    return await this.temperatureLabel.getText();
  }

}
