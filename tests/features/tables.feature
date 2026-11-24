Feature: Data Tables
  Scenario: Get info from table
    Given the main page is open
    When I navigate to the "Sortable Data Tables" page
    And I wait for the page to open and get the data
    Then I check the grabbed data