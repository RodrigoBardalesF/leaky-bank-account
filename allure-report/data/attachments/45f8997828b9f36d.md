# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CardOneCredentialsTests.spec.js >> Check password policy compliance
- Location: tests/CardOneCredentialsTests.spec.js:10:1

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
  2  | import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
  3  | import ConfigReader from '#framework/utils/ConfigReader.js';
  4  | import MainPage from './pages/MainPage.js';
  5  | import * as allure from 'allure-js-commons';
  6  | 
  7  | const firstCardPageIndicatorText = "1 / 4";
  8  | const secondCardPageIndicatorText = "2 / 4";
  9  | 
  10 | test('Check password policy compliance', async ({ customBrowser: browser }) => {
  11 |   await allure.epic('User Inyerface Registration');
  12 |   await allure.feature('Card 1 - Credentials');
  13 |   await allure.story('Password policy');
  14 |   await allure.severity('critical');
  15 |   await allure.description('Check that password field accepts proper credentials nased on the requirements');
  16 |   await allure.tag('password compliance');
  17 | 
  18 |   const testData = ConfigReader.getTestData();
  19 | 
  20 |   const mainPage = new MainPage(browser.page);
  21 |   const signUpForm = mainPage.signUpForm;
  22 | 
  23 |   await test.step('Go to Main Page', async () => {
  24 |     await signUpForm.waitForPageToLoad();
  25 |     expect(await signUpForm.isPageOpened()).toBe(true);
  26 |     expect(await signUpForm.getPageIndicatorText()).toBe(firstCardPageIndicatorText);
  27 |   });
  28 | 
  29 |   await test.step('Fill up data on form', async () => {
  30 |     await signUpForm.typePassword(testData.firstPassword);
  31 |     await signUpForm.typeEmail(testData.emailName);
  32 |     await signUpForm.typeDomain(testData.emailDomain);
  33 |     await signUpForm.selectDomain(testData.emailExtension);
  34 |     await signUpForm.acceptTermsConditionsValue();
  35 |     await signUpForm.clickNextButton();
  36 |   });
  37 | 
  38 |   await test.step('Paging assertion', async () => {
  39 |     const interestsForm = mainPage.interestsForm;
> 40 |     expect(await interestsForm.isInterestsTitleDisplayed()).toBe(true);
     |                                                             ^ Error: expect(received).toBe(expected) // Object.is equality
  41 |     expect(await interestsForm.getPageIndicatorText()).toBe(secondCardPageIndicatorText);
  42 |   });
  43 | });
  44 | 
  45 | test('Check email domain extensions', async ({ customBrowser: browser }) => {
  46 |   await allure.epic('User Inyerface Registration');
  47 |   await allure.feature('Card 1 - Credentials');
  48 |   await allure.story('Email domain extension');
  49 |   await allure.severity('normal');
  50 |   await allure.description('Check that email field accepts proper credentials nased on the requirements');
  51 |   await allure.tag('email compliance');
  52 | 
  53 |   const emailExtensions = ['.org', '.co.uk', '.net', '.gov', '.de', '.fr', '.nl', '.com', '.be', '.jpg'];
  54 |   const testData = ConfigReader.getTestData();
  55 | 
  56 |   const mainPage = new MainPage(browser.page);
  57 |   const signUpForm = mainPage.signUpForm;
  58 |   const interestsForm = mainPage.interestsForm;
  59 | 
  60 |   await test.step('Fill up data on form', async () => {
  61 |     await signUpForm.waitForPageToLoad();
  62 |     expect(await signUpForm.isPageOpened()).toBe(true);
  63 |     expect(await signUpForm.getPageIndicatorText()).toBe(firstCardPageIndicatorText);
  64 |   });
  65 | 
  66 |   await test.step('Fill up data on form', async () => {
  67 |     for(const emailExtension of emailExtensions) {
  68 |       await signUpForm.typePassword(testData.secondPassword);
  69 |       await signUpForm.typeEmail(testData.emailName);
  70 |       await signUpForm.typeDomain(testData.emailDomain);
  71 |       await signUpForm.selectDomain(emailExtension);
  72 |       await signUpForm.acceptTermsConditionsValue();
  73 |       await signUpForm.clickNextButton();
  74 | 
  75 |       expect(await interestsForm.isInterestsTitleDisplayed()).toBe(true);
  76 |       expect(await interestsForm.getPageIndicatorText()).toBe(secondCardPageIndicatorText);
  77 |       await browser.refresh();
  78 |     }
  79 |   });
  80 | });
  81 | 
```