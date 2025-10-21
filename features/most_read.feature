@desktop
Feature: Most Read section on Al Jazeera home page

  Scenario: Scenario 1 - Desktop: "Most Read" section appears
    Given I am on the Al Jazeera home page
    Then the "Most Read" section should be visible on desktop

  Scenario: Scenario 2 - Desktop: "Most Read" has 10 posts
    Then the "Most Read" section should have 10 posts

  Scenario: Scenario 4 - Desktop Accessibility: Bypass block "Skip to Most Read" works
    When I focus the page header to reveal accessibility skip links
    And I open the Bypass Blocks menu via keyboard
    And I click the "Skip to Most Read" menu item
    Then the URL should include the Most Read anchor

