import BasePage from '#framework/ui/page/BasePage.js';
import { Label, Button } from '#framework/ui/elements/index.js';

export default class DownloadPDFPage extends BasePage {
  constructor(browser) {
    super(new Label(browser.page.getByRole('heading', { name: 'Create Printable Calendar'}), 'Download PDF unique element'), 'City Weather Page');
    this.timeButton = (chooseTime) => new Label(browser.page.getByText(chooseTime), 'Monthly button')
    this.downloadPDF = new Button(browser.  page.locator('button.form-submit'),'Button to download calendar')
    this.browser = browser;
    this.page = browser.page;
  }

  async selectTimeForCalendar(chooseTime){
    await this.timeButton(chooseTime).click()
  }
  async downloadCalendar(fileName){
        return await this.browser.downloadAndSave(async () => {
            await this.downloadPDF.click();},
        fileName
      )
  }

}
