import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import WorldClockPage from '../pages/WorldClockPage.js';


Given('the city {string} is already added to the personal world clock', async function (cityName) {
    this.cityName = cityName;
    const worldClockPage = this.getPage(WorldClockPage);
    //await worldClockPage.verifyCityAdded(cityName);
});

When('I enable the time zone option in the settings', async function () {
    const worldClockPage = this.getPage(WorldClockPage);
    await worldClockPage.checkTimeZoneName();
});

Then('I should see the time zone abbreviation beside {string}', async function (cityName) {
    const worldClockPage = this.getPage(WorldClockPage);
    const abbreviation = await worldClockPage.checkTimeZoneVisibility(cityName);

    expect(abbreviation).toBeTruthy();
});

