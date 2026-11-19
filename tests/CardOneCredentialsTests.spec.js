// @ts-check
import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
import ConfigReader from '#framework/utils/ConfigReader.js';
import MainPage from './pages/MainPage.js';
import * as allure from 'allure-js-commons';

const firstCardPageIndicatorText = "1 / 4";
const secondCardPageIndicatorText = "2 / 4";

test('Check password policy compliance', async ({ customBrowser: browser }) => {
  await allure.epic('User Inyerface Registration');
  await allure.feature('Card 1 - Credentials');
  await allure.story('Password policy');
  await allure.severity('critical');
  await allure.description('Check that password field accepts proper credentials nased on the requirements');
  await allure.tag('password compliance');

  const testData = ConfigReader.getTestData();

  const mainPage = new MainPage(browser.page);
  const signUpForm = mainPage.signUpForm;

  await test.step('Go to Main Page', async () => {
    await signUpForm.waitForPageToLoad();
    expect(await signUpForm.isPageOpened()).toBe(true);
    expect(await signUpForm.getPageIndicatorText()).toBe(firstCardPageIndicatorText);
  });

  await test.step('Fill up data on form', async () => {
    await signUpForm.typePassword(testData.firstPassword);
    await signUpForm.typeEmail(testData.emailName);
    await signUpForm.typeDomain(testData.emailDomain);
    await signUpForm.selectDomain(testData.emailExtension);
    await signUpForm.acceptTermsConditionsValue();
    await signUpForm.clickNextButton();
  });

  await test.step('Paging assertion', async () => {
    const interestsForm = mainPage.interestsForm;
    expect(await interestsForm.isInterestsTitleDisplayed()).toBe(true);
    expect(await interestsForm.getPageIndicatorText()).toBe(secondCardPageIndicatorText);
  });
});

test('Check email domain extensions', async ({ customBrowser: browser }) => {
  await allure.epic('User Inyerface Registration');
  await allure.feature('Card 1 - Credentials');
  await allure.story('Email domain extension');
  await allure.severity('normal');
  await allure.description('Check that email field accepts proper credentials nased on the requirements');
  await allure.tag('email compliance');

  const emailExtensions = ['.org', '.co.uk', '.net', '.gov', '.de', '.fr', '.nl', '.com', '.be', '.jpg'];
  const testData = ConfigReader.getTestData();

  const mainPage = new MainPage(browser.page);
  const signUpForm = mainPage.signUpForm;
  const interestsForm = mainPage.interestsForm;

  await test.step('Fill up data on form', async () => {
    await signUpForm.waitForPageToLoad();
    expect(await signUpForm.isPageOpened()).toBe(true);
    expect(await signUpForm.getPageIndicatorText()).toBe(firstCardPageIndicatorText);
  });

  await test.step('Fill up data on form', async () => {
    for(const emailExtension of emailExtensions) {
      await signUpForm.typePassword(testData.secondPassword);
      await signUpForm.typeEmail(testData.emailName);
      await signUpForm.typeDomain(testData.emailDomain);
      await signUpForm.selectDomain(emailExtension);
      await signUpForm.acceptTermsConditionsValue();
      await signUpForm.clickNextButton();

      expect(await interestsForm.isInterestsTitleDisplayed()).toBe(true);
      expect(await interestsForm.getPageIndicatorText()).toBe(secondCardPageIndicatorText);
      await browser.refresh();
    }
  });
});
