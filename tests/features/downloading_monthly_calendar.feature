Feature: Dowload Monthly calendar
  Scenario: Search for USA monthly calendar and download it in PDF
    Given the main page is open
    When I click the link with text "Calendar"
    And I navigate to the Calendar page, I click on "United States" country
    And I click on the link to download the calendar
    Given I am in the Download page
    When I click on the "Monthly" option and download the page
    Then I check the path for the download is correct