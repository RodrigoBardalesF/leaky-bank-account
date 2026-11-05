// @ts-check
import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
import MainPage from './pages/MainPage.js';
import TablesPage from './pages/TablesPage.js';

const expectedSum = 251;
const currencySign = '$';

test('Sum of Due values should be correct', async ({ customBrowser: browser }) => {
  const mainPage = new MainPage(browser.page);
  await mainPage.waitForPageToLoad();
  expect(await mainPage.isPageOpened()).toBe(true);

  await mainPage.clickNavigationLink('Sortable Data Tables');

  const tablesPage = new TablesPage(browser.page);
  await tablesPage.waitForPageToLoad();
  expect(await tablesPage.isPageOpened()).toBe(true);

  const dueValues = await tablesPage.getDueColumnValues();

  const cleanDueValues = dueValues.map(item => parseInt(item.replaceAll(currencySign,'')));

  let actualSum = 0;

  for (const sum of cleanDueValues) {
    actualSum += sum;
  }
  
  expect(actualSum).toBe(expectedSum);
});
