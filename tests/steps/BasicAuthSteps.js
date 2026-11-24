import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import BasicAuth from '../pages/BasicAuth.js';
import MainPage from '../pages/MainPage.js';

const message = 'Congratulations! You must have the proper credentials.';

Then('I enter the success page',async function (){
  const basicAuthPage = this.getPage(BasicAuth);
  await basicAuthPage.waitForPageToLoad(); 
  expect(await basicAuthPage.isPageOpened()).toBe(true); 
  expect(await basicAuthPage.getSuccessMessage()).toEqual(message);
});

