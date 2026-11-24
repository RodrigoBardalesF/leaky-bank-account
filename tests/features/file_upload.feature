Feature: File Upload
  Scenario: Click on the file upload button and upload file
    Given the main page is open
    When I navigate to the "File Upload" page
    And I upload the file
    Then I check the name of the uploaded file "test.txt"