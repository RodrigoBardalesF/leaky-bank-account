import BasePage from '#framework/ui/page/BasePage.js';
import { Button, Label } from '#framework/ui/elements/index.js';

export default class JavaScriptAlertsPage extends BasePage {
  constructor(page) {
    super(new Label(page.getByRole('heading', { name: 'JavaScript Alerts' }), 'JavaScript Alerts page unique element'), 'JavaScript Alerts Page');
    // Add elements to interact with
    this.forJSAlertButton = new Button(page.getByRole('button', {name:'Click for JS Alert'}),'JS alert button')
    this.result = new Label(page.locator('#result'), 'Result message');
    this.page = page;

  }

  async clickForJSAlertButton() {
      this.page.on('dialog', async dialog => {
        await dialog.accept();
    });
    
    await this.forJSAlertButton.click();
  }

  async getResultText() {
    return await this.result.getText();
  }
}
