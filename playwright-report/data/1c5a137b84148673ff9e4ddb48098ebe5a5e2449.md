# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CardOneCredentialsTests.spec.js >> Check password policy compliance
- Location: tests/CardOneCredentialsTests.spec.js:11:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e5]:
      - paragraph [ref=e7]: This site uses cookies, is that a problem for you?
      - generic [ref=e9]:
        - button "Not really, no" [ref=e11]
        - button "Yes" [ref=e13]
    - generic [ref=e14]:
      - generic [ref=e18]: 00:00:10
      - list [ref=e21]:
        - listitem [ref=e22]:
          - button "1" [ref=e23]
        - listitem [ref=e24]:
          - button "2" [ref=e25]
        - listitem [ref=e26]:
          - button "3" [ref=e27]
        - listitem [ref=e28]:
          - button "4" [ref=e29]
      - generic [ref=e31]:
        - generic [ref=e37]:
          - generic [ref=e38]:
            - generic [ref=e39]: 1 / 4
            - textbox "Choose Password" [ref=e41]: ZXCVB12345
            - generic [ref=e42]:
              - textbox "Your email" [ref=e44]: aqauser
              - generic [ref=e45]: "@"
              - textbox "Domain" [ref=e47]: example
              - generic [ref=e50]:
                - generic [ref=e51]: .com
                - generic [ref=e52]: 
          - generic [ref=e54]: I do not accept the Terms & Conditions
          - generic [ref=e59]:
            - generic [ref=e60]: Next
            - button "Cancel" [ref=e63]
            - generic [ref=e64]: Reset
        - generic [ref=e67]:
          - generic [ref=e68]: Your password requires at least 10 characters.
          - generic [ref=e69]: Your password should have at least 1 Capital letter.
          - generic [ref=e70]: Your password must have at least 1 Numeral.
          - generic [ref=e71]: Your password needs at least 1 letter of your email.
          - generic [ref=e72]: Your password can have at least 1 cyrillic character.
    - generic [ref=e74]:
      - heading "How can we help?" [level=2] [ref=e75]
      - button "" [ref=e76]
      - textbox [ref=e78]
      - generic [ref=e79]:
        - generic [ref=e80]: Help
        - button "Send to bottom" [ref=e82]: Sendto bottom
  - img "verhaert.digital" [ref=e84]
```

# Test source

```ts
  1  | // @ts-check
  2  | import { expect } from '#framework/ui/fixtures/browser.fixture.js';
  3  | import { test } from './support/screenshot.hook.js'; 
  4  | import ConfigReader from '#framework/utils/ConfigReader.js';
  5  | import MainPage from './pages/MainPage.js';
  6  | import * as allure from 'allure-js-commons';
  7  | 
  8  | const firstCardPageIndicatorText = "1 / 4";
  9  | const secondCardPageIndicatorText = "2 / 4";
  10 | 
  11 | test('Check password policy compliance', async ({ customBrowser: browser }) => {
  12 |   await allure.epic('User Inyerface Registration');
  13 |   await allure.feature('Card 1 - Credentials');
  14 |   await allure.story('Password policy');
  15 |   await allure.severity('critical');
  16 |   await allure.description('Check that password field accepts proper credentials based on the requirements');
  17 |   await allure.tag('password compliance');
  18 | 
  19 |   const testData = ConfigReader.getTestData();
  20 | 
  21 |   const mainPage = new MainPage(browser.page);
  22 |   const signUpForm = mainPage.signUpForm;
  23 | 
  24 |   await test.step('Go to Main Page', async () => {
  25 |     await signUpForm.waitForPageToLoad();
  26 |     expect(await signUpForm.isPageOpened()).toBe(true);
  27 |     expect(await signUpForm.getPageIndicatorText()).toBe(firstCardPageIndicatorText);
  28 |   });
  29 | 
  30 |   await test.step('Fill up data on form', async () => {
  31 |     await signUpForm.typePassword(testData.firstPassword);
  32 |     await signUpForm.typeEmail(testData.emailName);
  33 |     await signUpForm.typeDomain(testData.emailDomain);
  34 |     await signUpForm.selectDomain(testData.emailExtension);
  35 |     await signUpForm.acceptTermsConditionsValue();
  36 |     await signUpForm.clickNextButton();
  37 |   });
  38 | 
  39 |   await test.step('Paging assertion', async () => {
  40 |     const interestsForm = mainPage.interestsForm;
> 41 |     expect(await interestsForm.isInterestsTitleDisplayed()).toBe(true);
     |                                                             ^ Error: expect(received).toBe(expected) // Object.is equality
  42 |     expect(await interestsForm.getPageIndicatorText()).toBe(secondCardPageIndicatorText);
  43 |   });
  44 | });
  45 | 
  46 | test('Check email domain extensions', async ({ customBrowser: browser }) => {
  47 |   await allure.epic('User Inyerface Registration');
  48 |   await allure.feature('Card 1 - Credentials');
  49 |   await allure.story('Email domain extension');
  50 |   await allure.severity('normal');
  51 |   await allure.description('Check that email field accepts proper credentials nased on the requirements');
  52 |   await allure.tag('email compliance');
  53 | 
  54 |   const emailExtensions = ['.org', '.co.uk', '.net', '.gov', '.de', '.fr', '.nl', '.com', '.be', '.jpg'];
  55 |   const testData = ConfigReader.getTestData();
  56 | 
  57 |   const mainPage = new MainPage(browser.page);
  58 |   const signUpForm = mainPage.signUpForm;
  59 |   const interestsForm = mainPage.interestsForm;
  60 | 
  61 |   await test.step('Wait for page indicator text', async () => {
  62 |     await signUpForm.waitForPageToLoad();
  63 |     expect(await signUpForm.isPageOpened()).toBe(true);
  64 |     expect(await signUpForm.getPageIndicatorText()).toBe(firstCardPageIndicatorText);
  65 |   });
  66 | 
  67 |   await test.step('Fill out email data form', async () => {
  68 |     for(const emailExtension of emailExtensions) {
  69 |       await signUpForm.typePassword(testData.secondPassword);
  70 |       await signUpForm.typeEmail(testData.emailName);
  71 |       await signUpForm.typeDomain(testData.emailDomain);
  72 |       await signUpForm.selectDomain(emailExtension);
  73 |       await signUpForm.acceptTermsConditionsValue();
  74 |       await signUpForm.clickNextButton();
  75 | 
  76 |       expect(await interestsForm.isInterestsTitleDisplayed()).toBe(true);
  77 |       expect(await interestsForm.getPageIndicatorText()).toBe(secondCardPageIndicatorText);
  78 |       await browser.refresh();
  79 |     }
  80 |   });
  81 | });
  82 | 
```