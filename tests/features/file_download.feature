Feature: File Download
  Scenario: Click on the file download button and download file
    Given the main page is open
    When I navigate to the "File Download" page
    And I click on the download button for "textfile.txt"
    Then I check the download file path
