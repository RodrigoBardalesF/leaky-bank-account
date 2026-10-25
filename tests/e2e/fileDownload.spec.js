import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const fileName = "textfile.txt";
const downloadDir = path.join(process.cwd(), 'tests/downloads');

test.beforeEach(async ({ page }) => {
  if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir);
  }

  await page.goto('https://the-internet.herokuapp.com');
});

test('file should be downloaded', async ({ page }) => {
  await page.getByRole('link', { name: 'File Download', exact: true }).click();


  const fileLink = page.getByRole('link', { name: fileName, exact: true });
  const downloadedFilePath = path.join(downloadDir, fileName);

  const [download] = await Promise.all([
  page.waitForEvent('download'),
  page.getByRole('link', { name: fileName, exact: true }).click()
  ]);
  await download.saveAs(downloadedFilePath);
  console.log('File saved to: ', await download.path() )
  expect(download.path() == downloadedFilePath)
  
});

test.afterAll(() => {
  fs.rmSync(downloadDir, { recursive: true, force: true });
});
