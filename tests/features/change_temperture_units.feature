Feature: Change temperature units

  Scenario Outline: Enter into a city weather page and change the type of temperature units
    Given the main page is open
    When I navigate to the "Weather" page
    And I type "New York" into the input
    Given I wait 10 seconds for the dropdown to appear
    When I click element number 2 in the list
    And I click the settings button and choose "<Unit>"
    Then the text of temperature contains "<Symbol>"

    Examples:
      | Unit       | Symbol |
      | °Celsius   | °C     |
      | °Fahrenheit| °F     |