Feature: Check Time Zone 
  Scenario: Enable checkbox and see if Time Zone abbreviation is visible
    Given the city "Minsk" is already added to the personal world clock 
    When I enable the time zone option in the settings
    Then I should see the time zone abbreviation beside "MSK"