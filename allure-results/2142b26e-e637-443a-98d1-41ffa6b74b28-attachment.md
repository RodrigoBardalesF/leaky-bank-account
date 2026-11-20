# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CookiesPolicyTests.spec.js >> Dismiss cookies banner
- Location: tests/CookiesPolicyTests.spec.js:5:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Not really,no', exact: true })

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
      - generic [ref=e18]: 00:00:12
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
  1  | import { test } from '@playwright/test';
  2  | import Timeouts from '../constants/Timeouts.js';
  3  | import ElementStateHandler from './helpers/elementState.js';
  4  | 
  5  | export default class BaseElement {
  6  |   /**
  7  |    * @param {import('@playwright/test').Locator} locator
  8  |    * @param {string} name
  9  |    */
  10 |   constructor(locator, name) {
  11 |     this._locator = locator;
  12 |     this._name = name;
  13 |     this._type = 'Element';
  14 |   }
  15 | 
  16 |   get locator() {
  17 |     return this._locator;
  18 |   }
  19 | 
  20 |   get state() {
  21 |     return new ElementStateHandler(this.locator, this._name);
  22 |   }
  23 | 
  24 |   /**
  25 |    * Executes a click action encapsulated within a reporting step.
  26 |    * @returns {Promise<void>}
  27 |    */
  28 |   async click() {
  29 |     await test.step(`${this._type} '${this._name}' — Click`, async () => {
> 30 |       await this.locator.click();
     |                          ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  31 |     });
  32 |   }
  33 | 
  34 |   /**
  35 |    * Retrieves the inner text of the element encapsulated within a reporting step.
  36 |    * @returns {Promise<string>}
  37 |    */
  38 |   async getText() {
  39 |     return await test.step(`${this._type} '${this._name}' — Get text`, async () => {
  40 |       await this.waitForDisplayed();
  41 |       return await this.locator.innerText();
  42 |     });
  43 |   }
  44 | 
  45 |   /**
  46 |    * Retrieves the computed value of a CSS property of the element, encapsulated within a reporting step.
  47 |    * @param {string} propertyName - Name of the CSS property, e.g. 'height'
  48 |    * @returns {Promise<string>} The computed value, e.g. '228px'
  49 |    */
  50 |   async getCssProperty(propertyName) {
  51 |     return await test.step(`${this._type} '${this._name}' — Get CSS property '${propertyName}'`, async () => {
  52 |       return await this.locator.evaluate(
  53 |         (element, property) => window.getComputedStyle(element).getPropertyValue(property),
  54 |         propertyName
  55 |       );
  56 |     });
  57 |   }
  58 | 
  59 |   /**
  60 |    * Moves the mouse cursor over the element encapsulated within a reporting step.
  61 |    * @returns {Promise<void>}
  62 |    */
  63 |   async moveTo() {
  64 |     await test.step(`${this._type} '${this._name}' — Hover`, async () => {
  65 |       await this.locator.hover();
  66 |     });
  67 |   }
  68 | 
  69 |   /**
  70 |    * Waits for the element to become visible encapsulated within a reporting step.
  71 |    * @param {number} timeout
  72 |    * @returns {Promise<void>}
  73 |    */
  74 |   async waitForDisplayed(timeout = Timeouts.EXPLICIT_WAIT) {
  75 |     await test.step(`${this._type} '${this._name}' — Wait for element to be displayed`, async () => {
  76 |       await this.locator.waitFor({ state: 'visible', timeout });
  77 |     });
  78 |   }
  79 | }
  80 | 
```