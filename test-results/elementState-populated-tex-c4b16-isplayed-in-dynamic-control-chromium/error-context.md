# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: elementState.spec.js >> populated text should be displayed in dynamic control
- Location: tests/e2e/elementState.spec.js:10:1

# Error details

```
Error: page.inputValue: Unexpected token "70d8252c-5307-4eca-b220-4862ddfd90f1" while parsing css selector "70d8252c-5307-4eca-b220-4862ddfd90f1". Did you mean to CSS.escape it?
Call log:
  - waiting for 70d8252c-5307-4eca-b220-4862ddfd90f1

```

# Test source

```ts
  1  | // @ts-check
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | const randomString = crypto.randomUUID();
  5  | 
  6  | test.beforeEach(async ({ page }) => {
  7  |   await page.goto('https://the-internet.herokuapp.com');
  8  | });
  9  | 
  10 | test('populated text should be displayed in dynamic control', async ({ page }) => {
  11 |   await page.getByRole('link', { name: 'Dynamic Controls' }).click();
  12 | 
  13 |   await page.getByRole('button', { name: 'Enable' }).click();
  14 | 
  15 |   expect(page.getByRole('textbox').isEnabled)
  16 |   await page.getByRole('textbox').fill(randomString);
  17 |   //expect(page.getByText(randomString).isVisible)
> 18 |   expect(page.inputValue(randomString));
     |               ^ Error: page.inputValue: Unexpected token "70d8252c-5307-4eca-b220-4862ddfd90f1" while parsing css selector "70d8252c-5307-4eca-b220-4862ddfd90f1". Did you mean to CSS.escape it?
  19 | 
  20 | });
  21 | 
```