// @ts-check
import { test, expect } from '@playwright/test';
import path from 'path';

const fileName = 'test.txt';
const fullPathToFile = path.resolve(`./tests/uploads/${fileName}`);

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('file should be uploaded', async ({ page }) => {
  await page.getByRole('link', { name: 'File Upload' }).click();
  // upload file with fullPathToFile path
  await page.locator('input[name="file"]').click();
  await page.locator('input[name="file"]').setInputFiles(fullPathToFile);  
  
  //const uploadedFiles = page.locator('#uploaded-files');
  expect(page.getByText(fileName))
  // expect that fileName on Upload page is correct
  
});
