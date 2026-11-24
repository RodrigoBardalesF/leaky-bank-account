import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import SearchResultsPage from '../pages/SearchResultsPage.js';
import SearchedCityPage from '../pages/SearchedCityWeatherPage.js';

Given('I receive the results for the city I searched', async function () {
    const searchPage = this.getPage(SearchResultsPage);
    await searchPage.waitForPageToLoad();
    expect(await searchPage.isPageOpened()).toBe(true);
});

When('I click on the number {int} option', async function (linkName) {
    const searchPage = this.getPage(SearchResultsPage);
    await searchPage.chooseFirstOption(linkName);
});

Given('I am in the city weather Page', async function () {
    const cityPage = this.getPage(SearchedCityPage)
    await cityPage.waitForPageToLoad();
    expect(await cityPage.isPageOpened()).toBe(true);
})

When('I click on the settings and choose the {string} type of temperature', async function (linkName) {
    const cityPage = this.getPage(SearchedCityPage)
    await cityPage.openSettings();
    await cityPage.chooseTemperature(linkName);
}); 

Then('I check the text for the temperature {string} is correct', async function (linkName) {
    const cityPage = this.getPage(SearchedCityPage)
    const temperatureText = await cityPage.checkTemperatureText();
    expect(temperatureText).toBe(linkName);

}); 