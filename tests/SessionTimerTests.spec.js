import { expect } from '#framework/ui/fixtures/browser.fixture.js';
import { test } from './support/screenshot.hook.js'; 
import MainPage from './pages/MainPage.js';
import * as allure from 'allure-js-commons';

const expectedTimerValue = '00:00:00';
const timerDisplayTimeout = 725;

test('Check timer initial value', async ({ customBrowser: browser }) => {
  await allure.epic('User Inyerface Game Flow');
  await allure.feature('Session Timer');
  await allure.story('Timer initialization');
  await allure.severity('critical');
  await allure.description('Verify that the timer works properly.');
  await allure.tag('timer');

  await test.step('Expet timer value to start and increase value by the second', async () => {
    const mainPage = new MainPage(browser.page);
    await mainPage.waitForPageToLoad();
    expect(await mainPage.isPageOpened()).toBe(true);
    await browser.page.waitForTimeout(timerDisplayTimeout);
    expect(await mainPage.getTimerText()).toBe(expectedTimerValue);
  });
});
