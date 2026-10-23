import { test, expect } from '@playwright/test';

const expectedSum = 251;
const currencySign = '$';

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('sum of Due values should be correct', async ({ page }) => {
  await page.getByRole('link', {name: 'Sortable Data Tables'}).click();

  // get Due column elements
  
  let actualSum = 0;

  for (let i = 0; i < await dueItems.count(); i++) {
    // get value in the column
    
    // increase actualSum with value without currencySign
    
  }

  expect(actualSum).toEqual(expectedSum);
});
