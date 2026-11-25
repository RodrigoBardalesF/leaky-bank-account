Feature: Check Time Zone 
  Scenario: Enable checkbox and see if Time Zone abbreviation is visible
    Given the main page is open
    When I navigate to the "World Clock" page
    Given the city "Minsk" is already added to the personal world clock
    When I click on the time zone name to activate it
    Then I check the new clock with the abbreviation "msk"