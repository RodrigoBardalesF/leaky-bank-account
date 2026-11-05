# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: nested_frames.spec.js >> interact with text in Nested Frame
- Location: tests/nested_frames.spec.js:9:1

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

Expected: "LEFT"
Received: {"_locator": {"_apiName": "Locator", "_frame": {"_guid": "frame@8a1f487da5fdad84837aeae88836e3bc", "_type": "Frame"}, "_selector": "[name=\"frame-top\"] >> internal:control=enter-frame >> [name=\"frame-left\"] >> internal:control=enter-frame >> body", Symbol(nodejs.util.inspect.custom): [Function anonymous]}, "_name": "Left Frame label", "_type": "Label"}
```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - iframe [ref=f1e2]:
    - generic [ref=f2e1]:
      - iframe [ref=f2e2]:
        - generic [ref=f4e1]: LEFT
      - iframe [ref=f2e3]:
        - generic [ref=f5e1]: MIDDLE
      - iframe [ref=f2e4]:
        - generic [ref=f6e1]: RIGHT
  - iframe [ref=f1e3]:
    - generic [ref=f3e1]: BOTTOM
```

# Test source

```ts
  1  | // @ts-check
  2  | import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
  3  | import FramesPage from './pages/FramePages/FramesPage.js';
  4  | import NestedFramesPage from './pages/FramePages/NestedFramesPage.js';
  5  | import MainPage from './pages/MainPage.js';
  6  | import ConfigReader from '#framework/utils/ConfigReader.js';
  7  | 
  8  | 
  9  | test('interact with text in Nested Frame', async ({ customBrowser: browser }) => {
  10 |   const data = ConfigReader.getTestData()
  11 |   const leftFrameText = data.leftFrameText
  12 |   const rightFrameText = data.rightFrameText
  13 | 
  14 |   const mainPage = new MainPage(browser.page);
  15 |   mainPage.waitForPageToLoad()
  16 |   expect(await mainPage.isPageOpened()).toBe(true)
  17 |   
  18 |   await mainPage.clickNavigationLink('Nested Frames');
  19 | 
  20 |   const nestedFramesPage = new NestedFramesPage(browser.page);
  21 |   nestedFramesPage.waitForPageToLoad()
  22 |   expect(await nestedFramesPage.isPageOpened()).toBe(true)
  23 | 
> 24 |   expect(nestedFramesPage.leftFrameLabel).toEqual(leftFrameText)
     |                                           ^ Error: expect(received).toEqual(expected) // deep equality
  25 |   expect(nestedFramesPage.rightFrameLabel).toEqual(rightFrameText)
  26 | 
  27 | });
  28 | 
```