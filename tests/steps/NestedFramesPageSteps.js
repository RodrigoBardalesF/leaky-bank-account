import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import NestedFramesPage from '../pages/FramePages/NestedFramesPage.js';

When('I open the page and read the text on the left and right frame', async function () {
  const nestFramesPage = this.getPage(NestedFramesPage);
  await nestFramesPage.waitForPageToLoad(); 
  expect(await nestFramesPage.isPageOpened()).toBe(true); 

  this.leftFrame = await nestFramesPage.readLeftFrame();
  this.rightFrame = await nestFramesPage.readRightFrame();
}
);

Then('I check the text is shown correctly', async function () {
  expect(this.leftFrame).toEqual('LEFT'); 
  expect(this.rightFrame).toEqual('RIGHT'); 
});