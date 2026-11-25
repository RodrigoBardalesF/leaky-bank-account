Feature: Search City Weather

  Scenario: Search for New York weather
    Given the main page is open
    When I navigate to the "Weather" page
    And I type "New York" into the input
    Given I wait 10 seconds for the dropdown to appear
    When I click element number 2 in the list
    Then the text of element contains "new"
