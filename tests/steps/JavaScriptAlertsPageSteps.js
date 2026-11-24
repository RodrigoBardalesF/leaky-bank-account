import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import JavaScriptAlertsPage from '../pages/JavaScriptAlertsPage.js';

When('I load the page and click the alert button', async function () {
  const alertsPage = this.getPage(JavaScriptAlertsPage);
  await alertsPage.waitForPageToLoad(); 
  expect(await alertsPage.isPageOpened()).toBe(true); 
  await alertsPage.clickForJSAlertButton();
});

Then('I check the alert message', async function () {
  const alertsPage = this.getPage(JavaScriptAlertsPage);
  const message = await alertsPage.getResultText();
  expect(message).toEqual('You successfully clicked an alert');
});