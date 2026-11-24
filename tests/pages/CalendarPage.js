import BasePage from '#framework/ui/page/BasePage.js';
import { Label, Dropdown, Button } from '#framework/ui/elements/index.js';

export default class CalendarPage extends BasePage {
  constructor(page) {
    super(new Label(page.getByRole('strong', { name: 'Create calendar'}), 'City Weather Page unique element'), 'City Weather Page');
    this.calendarDropdown = new Dropdown(page.locator('#sf_country'), 'Calendar dropdown')
    this.showButton = new Button(page.getByText('Show'), 'Button to show country calendar')
    this.printCalendarLink = new Button(page.getByText('Printable Calendar (PDF)'), 'Link to go to the print calendar page')

  }

  async calendarDropdown(country) {
    await this.calendarDropdown.select(country)
  }

  async clickShowButton(){
    await this.showButton.click()
  }

  async clickPrintCalendar(){
    await this.printCalendarLink.click()
  }

}
