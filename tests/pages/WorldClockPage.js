import BasePage from '#framework/ui/page/BasePage.js';
import { Label, Button } from '#framework/ui/elements/index.js';

export default class WorldClockPage extends BasePage {
  constructor(page) {
    super(new Label(page.getByRole('heading', { name: 'The World Clock — Worldwide'}), 'Worldclock Page unique element'), 'Weather Page');
    this.page = page;
    this.personalClockButton = new Button(page.locator('a[title="Go to Personal World Clock"]'), 'Link to enter Personal World Clock');

  }

  async clickButtonToPersonalClock() {
    await this.personalClockButton.click();
  }


}
