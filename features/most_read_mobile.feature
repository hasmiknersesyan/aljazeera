
@mobile
Feature: Most Read on mobile

  Background:
    Given I am on the Al Jazeera home page

  Scenario: Scenario 3 - Mobile: "Most Read" is NOT shown
    Then the "Most Read" section should not appear on mobile
