import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import WorldClockPage from '../pages/WorldClockPage.js';
import PersonalClockPage from '../pages/PersonalClockPage.js';

Given('I am in the World Clock Page', async function () {
  const weatherPage = this.getPage(WorldClockPage);
  await weatherPage.waitForPageToLoad(); 
});

When('I click on the button to enter the personal clock', async function () {
  const weatherPage = this.getPage(WorldClockPage);
  await weatherPage.clickButtonToPersonalClock();
});

Given('I am in the personal clock page', async function () {
  const personalClockPage = this.getPage(PersonalClockPage);
  await personalClockPage.waitForPageToLoad(); 
});

When('I add a new clock for the country: {string} with the chosen element number {int}', async function (linkName, number) {
  const personalClockPage = this.getPage(PersonalClockPage);
  await personalClockPage.addNewClockButton();
  await personalClockPage.inputText(linkName);
  await personalClockPage.clickElementByNumber(number);
});

Then('I check the new clock with the name {string}', async function (linkName) {
  const personalClockPage = this.getPage(PersonalClockPage);
  expect(await personalClockPage.verifyClockName(linkName)).toContain(linkName)
  this.cityName = linkName; 

});
