Feature: Dashboard functionality

  As a Mikloset user
  I want to verify the dashboard elements and interactions
  So that I can ensure all menus, navigation, and user actions work correctly

  Background:
  
    Given the user is logged in and on the dashboard page using stored cookies
@loggedIn
  Scenario: Verify dashboard menus and welcome message
    Then the dashboard should display the following menu options:
      | Menu         |
      | Home          |
      | Add your style |
      | Style me       |
      | Curate me      |
      | Follow me      |
    And the dashboard should display a welcome message as "Welcome, qa"
    And the user email should be "shashidhar_qa@development.mikloset.com"
@loggedIn
  Scenario: Navigate to "Help me Style an Outfit" page
    When the user clicks the "Help me Style an Outfit" button
    Then the system should navigate to the styling page successfully
@loggedIn
  Scenario: Validate "Add Item(s) to My Closet" dropdown options
    When the user opens the "Add Item(s) to My Closet" dropdown
    Then the dropdown should contain the following options:
      | Option Name                                    | Status   |
      | Forward Digital Receipt To shashidhar_qa@development.mikloset.com | Enabled |
      | Add Items from Digital Receipts                | Enabled |
      | Scan my Gmail for New Receipts                 | Disabled |
      | Upload Item Image/URL                          | Enabled |
    And each enabled option should be clickable
@loggedIn
  Scenario: Verify "View All" navigation and item storage
    When the user clicks the "View All" button
    Then they should be navigated to the "My Items" page
    And if items are present, the item details should be stored for later use
@loggedIn
  Scenario: Verify category navigation and edit functionality
    When the user opens each category from the dashboard
    Then the page should navigate correctly for each category
    And when the user hovers over a category
    Then an "Edit" button should appear
    When the user clicks the "Edit" button
    Then they should be able to change the category picture successfully
@loggedIn
  Scenario: Verify user guide video playback
    When the user plays the "User Guide" video
    Then the video should start playing without error
