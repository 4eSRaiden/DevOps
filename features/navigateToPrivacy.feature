Feature: Navigate to privacy tab
  In order to read the privacy tab
  As a user
  I have to navigate to the main page and click on the "privacy" button

  Scenario: Navigating to the privacy tab
    Given I am on the main page
    When I click on the "privacy" button
    Then I should be redirected to the privacy tab
