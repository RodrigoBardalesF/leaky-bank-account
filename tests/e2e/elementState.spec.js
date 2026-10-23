// @ts-check
import { test, expect } from '@playwright/test';

const randomString = crypto.randomUUID();

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('populated text should be displayed in dynamic control', async ({ page }) => {
  await page.getByRole('link', { name: 'Dynamic Controls' }).click();

  await page.getByRole('button', { name: 'Enable' }).click();

  const inputField = page.locator('#input-example input');

  // expect that inputField is enabled

  // input randomString into inputField

  // expect that randomString is displayed
});
