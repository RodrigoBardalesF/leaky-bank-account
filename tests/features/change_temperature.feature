Feature: Search for a specific city
  Scenario: Change the temperature type
    Given the main page is open
    When I search the city with the name: "Aguascalientes"
    Given I receive the results for the city I searched
    When I click on the number 1 option    
    Given I am in the city weather Page
    When I click on the settings and choose the "°Celsius" type of temperature
    Then I check the text for the temperature "°C" is correct