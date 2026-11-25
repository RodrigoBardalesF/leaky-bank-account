import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import WeatherPage from '../pages/WeatherPage.js';
import CityWeatherPage from '../pages/CityWeatherPage.js';

When('I type {string} into the input', async function (text) {
  const weatherPage = this.getPage(WeatherPage);
  await weatherPage.waitForPageToLoad(); 
  await weatherPage.inputText(text);
});

Given('I wait {int} seconds for the dropdown to appear', async function (seconds) {
  const weatherPage = this.getPage(WeatherPage);
  await weatherPage.waitForDropdownApear(seconds * 1000);
});

When('I click element number {int} in the list', async function (number) {
  const weatherPage = this.getPage(WeatherPage);
  await weatherPage.clickElementByNumber(number);
});

When('I click the settings button and choose {string}', async function (unit) {
  const cityWeatherPage = this.getPage(CityWeatherPage);
  await cityWeatherPage.waitForPageToLoad(); 
  await cityWeatherPage.selectTemperatureType(unit);
});

Then('the text of temperature contains {string}', async function (symbol) {
  const cityWeatherPage = this.getPage(CityWeatherPage);
  const text = await cityWeatherPage.getTemperatureUnitText(); 
  expect(await text).toContain(symbol)
});
