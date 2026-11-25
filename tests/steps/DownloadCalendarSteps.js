import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import CalendarPage from '../pages/CalendarPage.js';
import DownloadCalendarPage from '../pages/DownloadCalendarPage.js';


Given('I am in the Calendar page', async function () {  
  const calendarP = this.getPage(CalendarPage);
  await calendarP.waitForPageToLoad(); 

});

When('I choose the country {string} and go to the download page', async function (linkName) {
  const calendarP = this.getPage(CalendarPage);
  await calendarP.chooseCountry(linkName);
  await calendarP.clickDownloadPDF();
});

When('I download the PDF with the time {string}', async function (linkName) {

  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' }); 
  const year = date.getFullYear();    
  const fileName = `United States ${month} ${year}.pdf`;

  const downloadPDF = new DownloadCalendarPage(this.browserWrapper); 
  await downloadPDF.waitForPageToLoad(); 
  await downloadPDF.chooseTimeForCalendar(linkName);
  this.path = await downloadPDF.clickDownloadPDF(fileName);
});


Then('I check the download file has the correct name', async function () {
  expect(this.path).toContain('United States');
  expect(this.path).toContain('.pdf');

});