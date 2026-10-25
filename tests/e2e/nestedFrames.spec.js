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
  const leftFrame = page.frameLocator('iframe[name="frame-left"]');

  // expect that left frame text is correct
  expect(page.getByText(`${leftFrameText}`))
  // access the Right nested frame
  const rightFrame = page.frameLocator('iframe[name="frame-right"]');
  // expect that right frame text is correct
  expect(page.getByText(`${rightFrameText}`))
});
