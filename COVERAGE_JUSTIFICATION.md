# Unit 4: Diagnostics & Test Coverage Justification
​
**Student Name:** [Your Name]
**Stack:** TypeScript
**Repository:** [Link to your repository]
​
## Part 1. Suite execution triage
| Test | Observed over N runs (e.g. 10/10 passed, 6/10 passed) | Status in the Allure report | Root cause category | Evidence (run, step, screenshot) | Action taken or proposed |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TC1 | | | | | |
| TC2 | | | | | |
| TC3 | | | | | |
| TC4 | | | | | |
​
## Part 2. Testing pyramid (TC2)
TC2 passes, but it takes a significant part of the suite's execution time.
1. Why can a passing test like this still be an anti-pattern, even though it matches the specification?
2. How would you distribute its checks across the testing pyramid to keep 100% requirements coverage and reduce execution time?
   - Unit / component layer: what moves here and why?
   - API layer: what should be checked here?
   - UI layer: how many checks (negative and positive) remain, and which?
​
## Part 3. Requirements coverage
For each test, compare the steps of its specification (from the MCP server) with what the test code actually verifies. Is every step verified? List every step that no test verifies, and explain what you would do about it.