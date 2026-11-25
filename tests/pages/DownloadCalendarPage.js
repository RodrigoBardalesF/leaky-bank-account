import BasePage from '#framework/ui/page/BasePage.js';
import { Label, Button } from '#framework/ui/elements/index.js';

export default class DownloadCalendarPage extends BasePage {
  constructor(browser) {
    super(new Label(browser.page.getByRole('heading', { name: 'Calendar for Year'}), 'Calendar Page unique element'), 'Calendar Page');
   
    this.chooseTimeForCalendar = (time) => new Label(browser.page.locator(`a[title="${time}"]`),'Time selector');
    this.downloadButton = new Button(browser.page.locator('button.form-submit:not(.ghost)'),'Download button');

    this.browser = browser; 
    this.page = browser.page;
  }

  async chooseTimeForCalendar(time) {
    await this.chooseTimeForCalendar(time).click();
  }

  async clickDownloadPDF(fileName){
    return await this.browser.downloadAndSave(async () => {
      await this.downloadButton.locator.click({ force: true });
    }, fileName);
  }
 

}