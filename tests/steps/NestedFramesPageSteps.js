import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import NestedFramesPage from '../pages/FramePages/NestedFramesPage.js';
import MainPage from '../pages/MainPage.js';

const mainPage = this.getPage(MainPage);

When('I click on the link to go to the Nested Frames Page', async function (linkName) {
  await mainPage.typeSearchRequest(linkName);
  await mainPage.searchClick();
  await mainPage.waitForPageToLoad(); 
  expect(await mainPage.isPageOpened()).toBe(true); 
});

const nestFramesPage = this.getPage(NestedFramesPage);

When('I click on the link to go to the Dinamically Loaded Page', async function () {
  await nestFramesPage.waitForPageToLoad(); 
  expect(await nestFramesPage.isPageOpened()).toBe(true); 
  const leftFrame = await nestFramesPage.readLeftFrame();
  expect(await leftFrame).toEqual('LEFT'); 
  const rightFrame = await nestFramesPage.readRightFrame();
  expect(await rightFrame).toEqual('RIGHT'); 
}
);

Then('I check the download file path', async function () {
  
});