import BasePage from '#framework/ui/page/BasePage.js';
import { Button, TextBox, Label } from '#framework/ui/elements/index.js';

export default class DynamicControlsPage extends BasePage {
  constructor(browser) {
    super(new Label(browser.page.getByRole('heading', { name: 'Dynamic Controls' }), 'Dynamic Controls title'), 'Dynamic Controls Page');
    this.browser = browser;
    this.page = browser.page;
    this.enableButton = new Button(browser.page.getByRole('button', { name: 'Enable' }), 'Enable button');
    this.inputField = new TextBox(browser.page.locator('#input-example input'), 'Input Field for Text');
  }

  async clickEnableButton(){
    await this.enableButton.click();
  } 

  async isInputFieldEnabled(){
    return await this.inputField.waitForDisplayed();
  }

  async inputTextIntoInputField(message){
    await this.inputField.setText(message);
  }

  async getValueFromInputField(){
    return await this.inputField.getValue(); 
  }

}
