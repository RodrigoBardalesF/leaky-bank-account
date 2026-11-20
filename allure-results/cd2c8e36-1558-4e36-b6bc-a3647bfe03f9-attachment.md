# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SessionTimerTests.spec.js >> Check timer initial value
- Location: tests/SessionTimerTests.spec.js:8:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "00:00:00"
Received: "00:00:01"
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
      - generic [ref=e18]: 00:00:02
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
            - textbox "Choose Password" [ref=e41]
            - generic [ref=e42]:
              - textbox "Your email" [ref=e44]
              - generic [ref=e45]: "@"
              - textbox "Domain" [ref=e47]
              - generic [ref=e50]:
                - generic [ref=e51]: other
                - generic [ref=e52]: 
          - generic [ref=e54]:
            - generic [ref=e55]: 
            - generic [ref=e59]: I do not accept the Terms & Conditions
          - generic [ref=e60]:
            - generic [ref=e61]: Next
            - button "Cancel" [ref=e64]
            - generic [ref=e65]: Reset
        - generic [ref=e68]:
          - generic [ref=e69]: Your password requires at least 10 characters.
          - generic [ref=e70]: Your password should have at least 1 Capital letter.
          - generic [ref=e71]: Your password must have at least 1 Numeral.
          - generic [ref=e72]: Your password needs at least 1 letter of your email.
          - generic [ref=e73]: Your password can have at least 1 cyrillic character.
    - generic [ref=e75]:
      - heading "How can we help?" [level=2] [ref=e76]
      - button "" [ref=e77]
      - textbox [ref=e79]
      - generic [ref=e80]:
        - generic [ref=e81]: Help
        - button "Send to bottom" [ref=e83]: Sendto bottom
  - img "verhaert.digital" [ref=e85]
```

# Test source

```ts
  1  | import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
  2  | import MainPage from './pages/MainPage.js';
  3  | import * as allure from 'allure-js-commons';
  4  | 
  5  | const expectedTimerValue = '00:00:00';
  6  | const timerDisplayTimeout = 725;
  7  | 
  8  | test('Check timer initial value', async ({ customBrowser: browser }) => {
  9  |   await allure.epic('User Inyerface Game Flow');
  10 |   await allure.feature('Session Timer');
  11 |   await allure.story('Timer initialization');
  12 |   await allure.severity('critical');
  13 |   await allure.description('Verify that the timer works properly.');
  14 |   await allure.tag('timer');
  15 | 
  16 |   await test.step('Expet timer value to start and increase value by the second', async () => {
  17 |     const mainPage = new MainPage(browser.page);
  18 |     await mainPage.waitForPageToLoad();
  19 |     expect(await mainPage.isPageOpened()).toBe(true);
  20 |     await browser.page.waitForTimeout(timerDisplayTimeout);
> 21 |     expect(await mainPage.getTimerText()).toBe(expectedTimerValue);
     |                                           ^ Error: expect(received).toBe(expected) // Object.is equality
  22 |   });
  23 | });
  24 | 
```