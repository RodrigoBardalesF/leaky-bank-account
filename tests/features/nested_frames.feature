Feature: Nested Frames
  Scenario: Interact with nested frames
    Given the main page is open
    When I navigate to the "Nested Frames" page
    And I open the page and read the text on the left and right frame
    Then I check the text is shown correctly