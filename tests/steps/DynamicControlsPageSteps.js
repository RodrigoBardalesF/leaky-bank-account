import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import DynamicControlsPage from '../pages/DynamicControlsPage.js';

When('I load the page and click the start button', async function () {
  this.dynamicPage = this.getPage(DynamicControlsPage); 
  await this.dynamicPage.waitForPageToLoad();
  await this.dynamicPage.clickEnableButton();
  await expect.poll(async () => await this.dynamicPage.isInputFieldEnabled()).toBe(true);
});

Then('I enter the input text and check it', async function () {
  const DynamicPage = this.getPage(DynamicControlsPage);
  await DynamicPage.inputTextIntoInputField('text');
  expect(await DynamicPage.getValueFromInputField()).toEqual('text');
});