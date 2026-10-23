import { test, expect } from '@playwright/test';

const successfulMessage = 'Congratulations! You must have the proper credentials.';

test.describe("Handling basic auth",() => {

//let httpCredentials = {"admin":"admin"}

  test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
  });

  test('Handle username and password prompt', async({page})=>{
  await page.getByRole('link', {name:'Basic Auth'}).click();

  page.on('dialog',async dialog => {
  expect(dialog.type()).toBe('prompt')
  expect(dialog.message()).toBe('Username');
  await dialog.accept('admin')
  });

  page.on('dialog',async dialog => {
    expect(dialog.type()).toBe('prompt')
    expect(dialog.message()).toBe('Password');
    await dialog.accept('admin')
  });

  expect(page.getByText('Congratulations! You must have the proper credentials.')).toBeVisible
  })
});