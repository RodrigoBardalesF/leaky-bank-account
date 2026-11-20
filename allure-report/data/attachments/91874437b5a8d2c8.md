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
    - generic [ref=e4]:
      - generic [ref=e8]: 00:00:01
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