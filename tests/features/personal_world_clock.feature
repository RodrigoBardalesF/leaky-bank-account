@scenario2
Feature: Personal World Clock

  Scenario: Add Minsk to the personal world clock
    Given the main page is open
    When I click on the Personal World Clock link
    And I press the link with name "more"
    And I press the link with name "Add City"
    And I verify the modal with title "Search for a city" is opened
    And I enter "Minsk" into the input with id "addtxt"
    And I wait 5 seconds until the suggestion list is shown
    And I click suggestion number 1 in dropdown
    And I press the modal button with text "Save"
    Then word "Minsk" is displayed
