import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import DynamicControlsPage from '../pages/DynamicControlsPage.js';

When('I load the page and click the start button', async function () {
  const DynamicPage = this.getPage(DynamicControlsPage);
  await DynamicPage.waitForPageToLoad(); 
  await DynamicPage.clickEnableButton();
  await DynamicPage.isInputFieldEnabled().toBe(true);
});

Then('I enter the input text and check it', async function () {
  const DynamicPage = this.getPage(DynamicControlsPage);
  await DynamicPage.inputTextIntoInputField('text');
  expect(await DynamicPage.getValueFromInputField()).toEqual('text');
});