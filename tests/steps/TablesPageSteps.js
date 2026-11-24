import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import TablesPage from '../pages/TablesPage.js';

When('I wait for the page to open and get the data', async function () {
  const tablePage = this.getPage(TablesPage);
  await tablePage.waitForPageToLoad(); 
  expect(await tablePage.isPageOpened()).toBe(true);
  this.dataValues = await tablePage.getDueColumnValues(); 
});

Then('I check the grabbed data', async function () {
  const expectedSum = 251;
  const currencySign = '$';
  let actualSum = 0;

  const cleanDueValues = this.dataValues.map(item => parseInt(item.replaceAll(currencySign,'')));

  for (const sum of cleanDueValues) {
    actualSum += sum;
  }
  
  expect(actualSum).toBe(expectedSum);
});