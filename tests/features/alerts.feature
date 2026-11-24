Feature: JavaScript Alerts
  Scenario: Click on the basic alert button and accept it
    Given the main page is open
    When I navigate to the "JavaScript Alerts" page
    When I load the page and click the alert button
    Then I check the alert message

