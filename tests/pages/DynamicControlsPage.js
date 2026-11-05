import BasePage from '#framework/ui/page/BasePage.js';
import { Button, TextBox, Label, FileInput } from '#framework/ui/elements/index.js';

export default class DynamicControlsPage extends BasePage {
  constructor(page) {
    super(new Label(page.getByRole('heading', { name: 'Dynamic Controls' }), 'Dynamic Controls unique element'), 'Dynamic Controls Page');
    this.enableButton = new Button(page.getByRole('button', { name: 'Enable' }), 'Enable button');
    this.inputField = new TextBox(page.getByRole('textbox'))
  }

  async clickEnableButton(){
    await this.enableButton.click()
  } 

  async isInputFieldEnabled(){
    return await this.inputField.isInputFieldEnabled()
  }

  async inputTextIntoInputField(message){
    await this.inputField.typeText(message)
  }

  async getValueFromInputField(){
    return this.inputField.getValue(); 
  }

  // Implement all methods for dynamic_controls test

}
