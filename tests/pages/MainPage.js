import BasePage from '#framework/ui/page/BasePage.js';
import { Label } from '#framework/ui/elements/index.js';

export default class MainPage extends BasePage {
  constructor(browser) {
    super(
      new Label(browser.page.getByRole('heading', { name: /Welcome to the-internet/i, level: 1 }), 'Main Page Header'),
      'Main Page'
    );
    this.browser = browser;
    this.page = browser.page; 
    this.navigationLink = (text) => new Label(this.page.getByRole('link', { name: text, exact:true }), `Navigation link: ${text}`);
  }

  async clickNavigationLink(navigationText) {
    await this.navigationLink(navigationText).click();
  }
}
