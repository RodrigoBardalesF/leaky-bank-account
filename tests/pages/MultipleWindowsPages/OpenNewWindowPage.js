import BasePage from '#framework/ui/page/BasePage.js';
import { Label, Button } from '#framework/ui/elements/index.js';

export default class OpenNewWindowPage extends BasePage {
  // Implement Page Object
  constructor(browser){
    super(new Label(page.getByRole('heading', { name: "Multiple Windows" }), 'Multiple Windows'), 'Multiple Windows');
    this.newWindowButton = new Button(page.getByRole('button', {name:'Click Here'}), 'New Window Button')
  }

  async clickForNewWindow (){
    this.newWindowButton.click()
  }

}
