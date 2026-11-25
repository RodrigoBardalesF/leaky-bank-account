import BasePage from '#framework/ui/page/BasePage.js';
import { Label, Dropdown, Button } from '#framework/ui/elements/index.js';

export default class CityWeatherPage extends BasePage {
  constructor(page) {
    super(new Label(page.getByRole('heading', { name: 'Forecast for the next 48 hours'}), 'City Weather Page unique element'), 'City Weather Page');
    this.pageHeader = new Label(page.locator('h1.headline-banner__title'), 'Page Header');

    this.weatherButton = new Label(page.getByText('Current weather and forecast'),'Button for weather tab');
    this.settingsButton = new Label(page.locator('i.i-font.i-settings'),'Button for settings');
    this.temperatureType = new Dropdown(page.locator('#fut'),'Temperature selector');
    this.saveButton = new Button(page.locator('button.green'));
    this.unitTemperatureLabel = new Label(page.locator('div.h2'));
  }

  async getPageHeaderText() {
    return await this.pageHeader.getText();
  }

  async selectTemperatureType(temperature){
    await this.weatherButton.click();
    await this.settingsButton.click();
    await this.temperatureType.selectOption(temperature);
    await this.saveButton.click();
  }

  async getTemperatureUnitText(){
    this.unitTemperatureLabel.getText();
  }
}
