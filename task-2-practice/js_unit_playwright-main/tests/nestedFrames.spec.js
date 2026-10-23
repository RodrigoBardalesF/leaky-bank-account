// @ts-check
import { test, expect } from '@playwright/test';

const leftFrameText = 'LEFT';
const rightFrameText = 'RIGHT';

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('check text in frames', async ({ page }) => {
  await page.getByRole('link', { name: 'Frames', exact: true }).click();
  await page.getByRole('link', { name: 'Nested Frames' }).click();
  
  const topFrame = page.frameLocator('frame[name="frame-top"]');
  // access the Left nested frame

  // expect that left frame text is correct

  // access the Right nested frame

  // expect that right frame text is correct

});
