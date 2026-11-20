# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CardOneCredentialsTests.spec.js >> Check password policy compliance
- Location: tests/CardOneCredentialsTests.spec.js:10:1

# Error details

```
TypeError: Cannot read properties of undefined (reading 'state')
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
            - textbox "Choose Password" [ref=e31]: ZXCVB12345
            - generic [ref=e32]:
              - textbox "Your email" [ref=e34]: aqauser
              - generic [ref=e35]: "@"
              - textbox "Domain" [ref=e37]: example
              - generic [ref=e39]:
                - generic [ref=e40]:
                  - generic [ref=e41]: .com
                  - generic [ref=e42]: 
                - generic [ref=e44]:
                  - generic [ref=e45]: other
                  - generic [ref=e46]: .org
                  - generic [ref=e47]: .co.uk
                  - generic [ref=e48]: .net
                  - generic [ref=e49]: .gov
                  - generic [ref=e50]: .de
                  - generic [ref=e51]: .fr
                  - generic [ref=e52]: .nl
                  - generic [ref=e53]: .com
                  - generic [ref=e54]: .be
                  - generic [ref=e55]: .jpg
          - generic [ref=e56]:
            - generic [ref=e57]: 
            - generic [ref=e61]: I do not accept the Terms & Conditions
          - generic [ref=e62]:
            - generic [ref=e63]: Next
            - button "Cancel" [ref=e66]
            - generic [ref=e67]: Reset
        - generic [ref=e70]:
          - generic [ref=e71]: Your password requires at least 10 characters.
          - generic [ref=e72]: Your password should have at least 1 Capital letter.
          - generic [ref=e73]: Your password must have at least 1 Numeral.
          - generic [ref=e74]: Your password needs at least 1 letter of your email.
          - generic [ref=e75]: Your password can have at least 1 cyrillic character.
    - generic [ref=e77]:
      - heading "How can we help?" [level=2] [ref=e78]
      - button "" [ref=e79]
      - textbox [ref=e81]
      - generic [ref=e82]:
        - generic [ref=e83]: Help
        - button "Send to bottom" [ref=e85]: Sendto bottom
  - img "verhaert.digital" [ref=e87]
```

# Test source

```ts
  1  | import { Label } from '#framework/ui/elements/index.js';
  2  | import BasePage from '#framework/ui/page/BasePage.js';
  3  | 
  4  | export default class InterestsForm extends BasePage {
  5  |   constructor(page) {
  6  |     super(new Label(page.getByText('Choose 3 interests'), 'Interests form unique locator'), 'Interests form');
  7  |     //this.interestsTitleLabel = new Label(page.getByText('Choose 3 interests'), 'Interests Title');
  8  |     //this.interestsTitleLabel = new Label(page.getByRole('heading',{name:'Choose 3 interests'}), 'Interests Title');
  9  |     this.pageIndicatorLabel = new Label(page.locator('div.page-indicator'), 'Page Indicator');
  10 |   }
  11 | 
  12 |   async isInterestsTitleDisplayed() {
> 13 |     return await this.interestsTitleLabel.state.isDisplayed();
     |                                           ^ TypeError: Cannot read properties of undefined (reading 'state')
  14 |   }
  15 | 
  16 |   async getPageIndicatorText() {
  17 |     return await this.pageIndicatorLabel.getText();
  18 |   }
  19 | }
  20 | 
```