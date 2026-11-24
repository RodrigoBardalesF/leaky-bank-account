@auth
Feature: Basic Authentication
  Scenario: Click on the basic auth button and enter the credentials
    Given the main page is open
    When I navigate to the "Basic Auth" page
    Then I get the success message