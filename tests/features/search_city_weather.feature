@scenario1
Feature: Search City Weather

  Scenario: Search for New York weather
    Given the main page is open
    When I click the link with text "Weather"
    And I verify the page title contains "Weather"
    And I type "New York" into the input
    Given I wait 5 seconds for the dropdown to appear
    When I click element number 2 in the list
    Then the text of element contains "New York"
