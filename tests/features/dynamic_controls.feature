Feature: Dynamic controls button press and input message
  Scenario: Click on the basic auth button and enter the credentials
    Given the main page is open
    When I navigate to the "Dynamic Controls" page
    And I load the page and click the start button
    Then I enter the input text and check it

