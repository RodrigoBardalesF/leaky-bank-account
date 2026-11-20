import { expect } from '#framework/ui/fixtures/browser.fixture.js';
import { test } from './support/screenshot.hook.js'; 
import MainPage from './pages/MainPage.js';
import * as allure from 'allure-js-commons';

test('Dismiss cookies banner', async ({ customBrowser: browser }) => {
  await allure.epic('User Inyerface Legal');
  await allure.feature('Card 1 - Credentials');
  await allure.story('Cookies Policy');
  await allure.severity('normal');
  await allure.description('Verify that set cookies comply with the policy.');
  await allure.tag('cookies');

  await test.step('Click on cookies button', async () => {
    const cookiesForm = new MainPage(browser.page).cookiesForm;
    await cookiesForm.waitForPageToLoad();
    expect(await cookiesForm.isPageOpened()).toBe(true);
    await cookiesForm.clickAcceptCookiesButton();
    expect(await cookiesForm.isPageOpened()).toBe(false);
  });
});
