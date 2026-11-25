import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import WorldClockPage from '../pages/WorldClockPage.js';
import PersonalClockPage from '../pages/PersonalClockPage.js';

Given('the city {string} is already added to the personal world clock', async function (cityName) {
  this.cityName = cityName;
  
  const worldClockPage = this.getPage(WorldClockPage);
  await worldClockPage.waitForPageToLoad(); 
  await worldClockPage.clickButtonToPersonalClock();

  const PersonalClockP = this.getPage(PersonalClockPage);
  await PersonalClockP.waitForPageToLoad(); 

  try {
    await PersonalClockP.verifyClockName(cityName);
  } catch (e) {
    await PersonalClockP.addNewClockButton();
    await PersonalClockP.inputText(cityName);
    await PersonalClockP.clickElementByNumber(1);  }
});

When('I click on the time zone name to activate it', async function () {
  const PersonalClockP = this.getPage(PersonalClockPage);
  await PersonalClockP.activateTimeZoneName();
});


Then('I check the new clock with the abbreviation {string}', async function (linkName) {
  const PersonalClockP = this.getPage(PersonalClockPage);
  expect(await PersonalClockP.verifyCityTZName(linkName)).toContain(linkName)
});