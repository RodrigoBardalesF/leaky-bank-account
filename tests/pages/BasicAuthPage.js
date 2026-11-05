import BasePage from '#framework/ui/page/BasePage.js';
import { Label } from '#framework/ui/elements/index.js';
import 'dotenv/config'; 

export default class BasicAuthPage extends BasePage {
  constructor(page) {
    super(new Label(page.getByRole('heading', { name: 'Basic Auth' }), 'basic auth page unique element'), 'Basic Auth Page');
    this.successMessage = new Label(page.locator('#successMessage'), 'Success message');

    // Add elements to interact with

  }

  async getSuccessMessage() {
    return await this.successMessage.getText();
  }
}
