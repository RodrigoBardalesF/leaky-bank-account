import { Label } from '#framework/ui/elements/index.js';
import BasePage from '#framework/ui/page/BasePage.js';

export default class FramesPage extends BasePage {
  constructor(browser) {
    super(new Label(browser.page.getByRole('heading',{name:'Frames'}), 'Frames page unique element'), 'Frames Page');
    this.browser = browser;
    this.page = browser.page; 
    this.nestedFramesLink = new Label(browser.page.getByRole('link',{name: 'Nested Frames'}), 'Nested Frames link');
  }

  async clickNestedFramesButton() {
    await this.nestedFramesLink.click();
  }
}
