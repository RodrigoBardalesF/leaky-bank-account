import BasePage from '#framework/ui/page/BasePage.js';
import { Button, Label } from '#framework/ui/elements/index.js';

export default class JavaScriptAlertsPage extends BasePage {
  constructor(browser) {
    super(new Label(browser.page.getByRole('heading', { name: 'JavaScript Alerts' }), 'JavaScript Alerts'), 'JavaScript Alerts Page');
    this.browser = browser; 
    this.forJSAlertButton = new Button(browser.page.getByRole('button', {name:'Click for JS Alert'}),'JS alert button');
    this.result = new Label(browser.page.locator('#result'), 'Result message');

  }

  async clickForJSAlertButton() {
    await this.browser.acceptAlert(async()=>{
      await this.forJSAlertButton.click();
    });
  }

  async getResultText() {
    return await this.result.getText();
  }
}
