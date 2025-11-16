Feature: Interivew Task Part 1
  In order to prepare interview task
  As a interviewee
  I want to test Most Read section

  Background:
   I have Most Read article on the page

  Scenario: Should Verify the "Most Read" Section on Desktop
    Given I have Most Read article on the page
    When I am on the aljazeera.com page
    Then I should see the Most Read article

  Scenario: Should Verify the "Most Read" Section on Mobile
    Given I have Most Read article on the page
    When I resize the window to mobile size
    Then the Most Read article should be hidden for mobile


