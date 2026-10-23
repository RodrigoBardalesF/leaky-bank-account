import { test, expect } from '@playwright/test';

const successfulMessage = 'Congratulations! You must have the proper credentials.';

// Set httpCredentials


test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('basic auth works', async ({ page }) => {
  await page.getByRole('link', {name: 'Basic Auth' }).click();
  
  // Verify that successfulMessage is displayed

});
