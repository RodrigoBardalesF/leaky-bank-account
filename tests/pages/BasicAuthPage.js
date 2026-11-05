import BasePage from '#framework/ui/page/BasePage.js';
import { Label } from '#framework/ui/elements/index.js';
import 'dotenv/config'; 

export default class BasicAuthPage extends BasePage {
  constructor(browser) {
    super(new Label(browser.page.getByRole('link', { name: 'Basic Auth' }), 'Basic auth page'), 'Basic Auth Page');
    this.browser = browser;
    this.page = browser.page;
    this.successMessage = new Label(browser.page.locator('.example p'), 'Success message');

  }

  async getSuccessMessage() {
    return await this.successMessage.getText();
  }
}
