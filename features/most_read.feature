Feature: Interview Task Part 1
  In order to ensure the site behaves correctly on different devices
  As an interviewee
  I want to verify the visibility of the Most Read section

  Background:
    Given I open the Al Jazeera homepage
    

  Scenario: The "Most Read" section should be visible on Desktop
    When I view the page on a desktop screen size
    Then I should see the Most Read section
    And I should see the "Most Read" section has 10 posts

  Scenario: The "Most Read" section should be hidden on Mobile
    When I view the page on a mobile screen size
    Then I should not see the Most Read section



