import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import CalendarPage from '../pages/CalendarPage.js';
import DownloadPDFPage from '../pages/DownloadPage.js';

When('I navigate to the Calendar page, I click on {string} country', async function (linkName) {
    const calendarPage = this.getPage(CalendarPage);
    await calendarPage.waitForPageToLoad();
    await calendarPage.calendarDropdown(linkName);
    await calendarPage.clickShowButton();
});

When('I click on the link to download the calendar', async function () {
    const calendarPage = this.getPage(CalendarPage);
    await calendarPage.clickPrintCalendar();
});

Given('I am in the Download page', async function () {
    const downloadPage = this.getPage(DownloadPDFPage)
    await downloadPage.waitForPageToLoad();
    expect(await downloadPage.isPageOpened()).toBe(true);
})

When('I click on the {string} option and download the page', async function (linkName) {
    const downloadPage = this.getPage(DownloadPDFPage)
    await downloadPage.selectTimeForCalendar(linkName);
    this.filePath = await downloadPage.downloadCalendar();
}); 

Then('I check the path for the download is correct', async function () {
    const downloadPage = this.getPage(DownloadPDFPage)
    expect(this.filePath).toBe(true);

}); 