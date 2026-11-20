# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CookiesPolicyTests.spec.js >> Dismiss cookies banner
- Location: tests/CookiesPolicyTests.spec.js:6:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: false
Received: true
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e8]: 00:00:02
      - list [ref=e11]:
        - listitem [ref=e12]:
          - button "1" [ref=e13]
        - listitem [ref=e14]:
          - button "2" [ref=e15]
        - listitem [ref=e16]:
          - button "3" [ref=e17]
        - listitem [ref=e18]:
          - button "4" [ref=e19]
      - generic [ref=e21]:
        - generic [ref=e27]:
          - generic [ref=e28]:
            - generic [ref=e29]: 1 / 4
            - textbox "Choose Password" [ref=e31]
            - generic [ref=e32]:
              - textbox "Your email" [ref=e34]
              - generic [ref=e35]: "@"
              - textbox "Domain" [ref=e37]
              - generic [ref=e40]:
                - generic [ref=e41]: other
                - generic [ref=e42]: 
          - generic [ref=e44]:
            - generic [ref=e45]: 
            - generic [ref=e49]: I do not accept the Terms & Conditions
          - generic [ref=e50]:
            - generic [ref=e51]: Next
            - button "Cancel" [ref=e54]
            - generic [ref=e55]: Reset
        - generic [ref=e58]:
          - generic [ref=e59]: Your password requires at least 10 characters.
          - generic [ref=e60]: Your password should have at least 1 Capital letter.
          - generic [ref=e61]: Your password must have at least 1 Numeral.
          - generic [ref=e62]: Your password needs at least 1 letter of your email.
          - generic [ref=e63]: Your password can have at least 1 cyrillic character.
    - generic [ref=e65]:
      - heading "How can we help?" [level=2] [ref=e66]
      - button "" [ref=e67]
      - textbox [ref=e69]
      - generic [ref=e70]:
        - generic [ref=e71]: Help
        - button "Send to bottom" [ref=e73]: Sendto bottom
  - img "verhaert.digital" [ref=e75]
```

# Test source

```ts
  1  | import { expect } from '#framework/ui/fixtures/browser.fixture.js';
  2  | import { test } from './support/screenshot.hook.js'; 
  3  | import MainPage from './pages/MainPage.js';
  4  | import * as allure from 'allure-js-commons';
  5  | 
  6  | test('Dismiss cookies banner', async ({ customBrowser: browser }) => {
  7  |   await allure.epic('User Inyerface Legal');
  8  |   await allure.feature('Card 1 - Credentials');
  9  |   await allure.story('Cookies Policy');
  10 |   await allure.severity('normal');
  11 |   await allure.description('Verify that set cookies comply with the policy.');
  12 |   await allure.tag('cookies');
  13 | 
  14 |   await test.step('Click on cookies button', async () => {
  15 |     const cookiesForm = new MainPage(browser.page).cookiesForm;
  16 |     await cookiesForm.waitForPageToLoad();
  17 |     expect(await cookiesForm.isPageOpened()).toBe(true);
  18 |     await cookiesForm.clickAcceptCookiesButton();
> 19 |     expect(await cookiesForm.isPageOpened()).toBe(false);
     |                                              ^ Error: expect(received).toBe(expected) // Object.is equality
  20 |   });
  21 | });
  22 | 
```