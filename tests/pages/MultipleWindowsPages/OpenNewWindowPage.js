import BasePage from '#framework/ui/page/BasePage.js';
import { Label } from '#framework/ui/elements/index.js';

export default class OpenNewWindowPage extends BasePage {
  constructor(browser){
    super(new Label(browser.page.getByRole('heading', { name: 'Opening a new window' }), 'Multiple Windows unique header'), 'Multiple Windows');
    this.newWindowLink = new Label(browser.page.locator('.example a'), 'New Window link');
    this.browser = browser; 
    this.page = browser.page;
  }

  async clickForNewWindow (){
    return await this.browser.openLinkInNewTab(async () => {
      await this.newWindowLink.click();
    });
  }
}