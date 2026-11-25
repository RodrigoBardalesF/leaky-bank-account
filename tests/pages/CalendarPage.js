import BasePage from '#framework/ui/page/BasePage.js';
import { Label, Dropdown } from '#framework/ui/elements/index.js';

export default class CalendarPage extends BasePage {
  constructor(page) {
    super(new Label(page.getByRole('heading', { name: 'Calendar for Year'}), 'Calendar Page unique element'), 'Calendar Page');
   
    this.chooseCitySelector = new Dropdown(page.locator('#sf_country'),'Country selector');
    this.showButton = new Label(page.locator('input[value="Show"]'),'Show button');
    this.printCalendarbutton = new Label(page.getByRole('link',{name:'Printable Calendar (PDF)'}),'Button to print calendar');
  }

  async chooseCountry(country) {
    await this.chooseCitySelector.selectOption(country);
    await this.showButton.click();
  }

  async clickDownloadPDF(){
    this.printCalendarbutton.click();
  }
 

}
