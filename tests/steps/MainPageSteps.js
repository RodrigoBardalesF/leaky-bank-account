import { Given, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import MainPage from '../pages/MainPage.js';

Given('the main page is open', async function () {
  const mainPage = await this.getPage(MainPage);
  await mainPage.waitForPageToLoad();
  expect(await mainPage.isPageOpened()).toBe(true);
});

When('I navigate to the {string} page', async function (linkName) {
  const mainPage = await this.getPage(MainPage);
  await mainPage.clickNavigationLink(linkName);
});

//Searching for a specific city

When('I search the city with the name: {string}', async function (linkName) {
  const mainPage = await this.getPage(MainPage); 
  await mainPage.searchSpecificCity(linkName);
});

//Opening Personal World Clock Page

When('I click on the Personal World Clock link', async function () {
  const mainPage = await this.getPage(MainPage); 
  await mainPage.enterIntoPersonalWorldClock();
});

//Click on the nav link
When('I click on the Dropdown link for {string}', async function (linkName) {
  const mainPage = await this.getPage(MainPage); 
  await mainPage.enterIntoPersonalWorldClock();
});