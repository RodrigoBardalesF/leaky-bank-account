// @ts-check
import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const fileName = "test.txt";
const downloadDir = path.join(process.cwd(), 'downloads');

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

  // wait until the file is fully downloaded along the specific downloadedFilePath

  // assert that file downloaded
  
});

test.afterAll(() => {
  fs.rmSync(downloadDir, { recursive: true, force: true });
});
