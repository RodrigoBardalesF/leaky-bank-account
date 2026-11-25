Feature: Personal World Clock

  Scenario: Add Minsk to the personal world clock
    Given the main page is open
    When I navigate to the "World Clock" page
    Given I am in the World Clock Page
    When I click on the button to enter the personal clock
    Given I am in the personal clock page
    When I add a new clock for the country: "Minsk" with the chosen element number 1
    Then I check the new clock with the name "Minsk"
