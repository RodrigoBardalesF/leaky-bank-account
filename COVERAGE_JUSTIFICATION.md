# Unit 4: Diagnostics & Test Coverage Justification
​
**Student Name:** DRodrigo Favela
**Stack:** Javascript / Node
**Repository:** https://github.com/RodrigoBardalesF/
​
## Part 1. Suite execution triage
| Test | Observed over N runs (e.g. 10/10 passed, 6/10 passed) | Status in the Allure report | Root cause category | Evidence (run, step, screenshot) | Action taken or proposed |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TC1 | CardOneCredentialsTests.spec | 0/12 | Failed | Product defects  | Evidence on /evidence | Check if the page indicator shows 2/4 or if it's the first page and shows 1/4
| TC2 | CardOneCredentialsTests.spec | 12/12 | Passed | n/a | n/a |  
| TC3 | CookiesPolicyTests.spec  | 0/12 | Failed | Product defects | Evidence on /evidence | Check the button and it's locator name as the name that is being checked is 'Not really,no'. Check the requirements for the expected button title.
| TC4 | SessionTimerTests.spec | 0/12 | Failed | Product defects  | Evidence on /evidence  | Timer value only checks once the start of the timer but doesn't check further if the timer increases by one every second.
​
## Part 2. Testing pyramid (TC2)
TC2 passes, but it takes a significant part of the suite's execution time.
1. Why can a passing test like this still be an anti-pattern, even though it matches the specification?

Because it can test a lot of things in one test. It can also be waiting a long time for the assertment results. And UI tests can take a long time due to opening and using a browser and the network speed that may be slowing down the test.

2. How would you distribute its checks across the testing pyramid to keep 100% requirements coverage and reduce execution time?
   - Unit / component layer: what moves here and why?
The password and email validation, and the calculation of the timer because they're fast and isolated.
   - API layer: what should be checked here?
User registry, cookies banner and timer because it's faster than the UI test, and no needed browser.
   - UI layer: how many checks (negative and positive) remain, and which?
​Check the critical flows because it takes the biggest amount of time. So check MAT for registering a user, so there should be just a few of them. For error messages with invalid data and handling the cookies banner.

## Part 3. Requirements coverage
For each test, compare the steps of its specification (from the MCP server) with what the test code actually verifies. Is every step verified? List every step that no test verifies, and explain what you would do about it.

TC1 - The steps are complete but it seems that the second page is not loading. We need to check the button element when clicking Next so it works properly.
TC3 - At the end of the test, on the assertion, it's checking if the page is closed, not if the banner element is no longer displayed on the page. The assertion needs to be changed so it can check the visibility of the banner, not if the entire page is closed.
TC4 - The test checks if the timer starts at zero but the timer on the page starts counting miliseconds, not giving the test the oprtunity to start counting from zero and the test doesn't check if the times is increasing its value by 1 every second that passes. We have to focus to checking that the timer counter is increasing every second by the proper amount of time in the assertion.

PART 4 - Fixed test

I fixed the cookie policy test, I checked the CookiesForm.js and found the locator was missing a space, I created a new test, fixed the locator and it passed. The evidence is in the directory /evidence/Fixed-Test/Fixed Cookie Policy test Allure.png 