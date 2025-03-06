Feature: Home

  Background:
    Given I am on the main page

  Scenario: Verify products page
    When I click on Products link
    Then Products page should be opened

  Scenario: Verify Carousel Functionality
    When I am on the main page1
    Then Images are changed

  @only
  Scenario: Verify Carousel Arrow Button Click Functionality
    When Click on right arrow button
    Then Image should be changed
    When Click on left arrow button
    Then Image should be changed back