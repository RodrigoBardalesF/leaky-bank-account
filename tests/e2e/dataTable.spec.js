import { test, expect } from '@playwright/test';

const expectedSum = 251;
const currencySign = '$';

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('sum of Due values should be correct', async ({ page }) => {
  await page.getByRole('link', {name: 'Sortable Data Tables'}).click();
  let actualSum = 0;

  await page.locator('tbody tr').first().waitFor();
  const row = await page.locator('#table1 tbody tr td:nth-child(4)').allTextContents();
  console.log(row);
  const dueItems = row.map(str => str.replaceAll(`${currencySign}`,''));
  console.log(dueItems);

  for (let i = 0; i < dueItems.length; i++) {

    actualSum += parseInt(parseFloat(dueItems[i]))
        
  }
  console.log(actualSum)
  expect(actualSum).toEqual(expectedSum);
});
