@livestream
Feature: Livestream page

  Scenario: Scenario 1 - Validate Player is visible in Livestream Player
    Given I am on the Al Jazeera live page
    Then the Livestream player is visible

  Scenario: Scenario 2 - Validate "Switch Player" button is visible
    Given I am on the Al Jazeera live page
    Then the "Switch Player" button is visible in the Livestream player
