import BasePage from '#framework/ui/page/BasePage.js';
import { Label } from '#framework/ui/elements/index.js';

export default class NewWindowPage extends BasePage {
  constructor(browser) {
    super(new Label(browser.page.locator('.example h3'), 'New Window page unique element'), 'New Window Page');
    this.browser = browser; 
    this.page = browser.page;
    this.newWindowTextLabel = new Label(browser.page.locator('.example h3'), 'New Window Text Label');
  }

  async getNewWindowLabelText() {
    await this.browser.switchToTab(1);
    return await this.newWindowTextLabel.getText();
  }
}
