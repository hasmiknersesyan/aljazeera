Feature: Interivew Task Part 1
  In order to prepare interview task
  As a interviewee
  I want to test Most Read section

  Background:
    Given I am on the aljazeera.com page


  Scenario: Ensure the "Most Read" section is appearing
    Given I am on the aljazeera.com page
    When I am on the aljazeera.com page
    Then I should see the Most Read article
