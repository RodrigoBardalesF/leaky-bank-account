// @ts-check
import { test, expect } from '@playwright/test';

const newWindowText = 'New Window';

test.beforeEach(async ( { page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('new window text is displayed', async ({ page }) => {
  await page.getByRole('link', { name: 'Multiple Windows' }).click();

  const clickHereLink = page.getByRole('link', { name: 'Click Here' });

  // click 'Click Here' link and wait until new window opened

  // expect that new window text is displayed

});
