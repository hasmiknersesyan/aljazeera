@live
Feature: Interview Task Part 2
  In order to ensure the livestream section works correctly
  As an interviewee
  I want to verify the livestream player functionality

  Background:
    Given I open the Al Jazeera livestream page

  Scenario: The video player should be visible in Livestream Player
    When I view the page on a desktop screen size
    Then I should see the video player

  Scenario: The Switch Player button should be visible in Livestream Player
    When I view the page on a desktop screen size
    Then I should see the Switch Player button
