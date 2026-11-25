Feature: Download monthly calendar 
  Scenario: Go to calendar page and download it as PDF
    Given the main page is open
    When I navigate to the "Calendar" page
    When I choose the country "United States" and go to the download page
    And I download the PDF with the time "Monthly Calendar"  
    Then I check the download file has the correct name