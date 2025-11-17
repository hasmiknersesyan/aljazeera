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


  Scenario: The bypass block menu item for "Most Read" should work (accessibility)
    When I view the page on a desktop screen size
    Then I should see the bypass link
    
  @bypass
  Scenario: The bypass block menu item for "Most Read" should work (accessibility)    
    Given I click the empty white space
    When I press the TAB key to reveal the Bypass Blocks menu
    Then the Bypass Blocks menu should become visible
    When I activate the "Skip to Most Read" option
    Then the URL should contain "#most-read-container"
