Feature: Home Page - Common UI and Functional Sections

  As a registered user
  I want to view my personalized home dashboard
  So that I can start my style journey by adding, styling, and sharing my looks

  Background:
    Given the user should be in dashboard page in Mikloset 

  @positive
  Scenario: Verify the Home Page displays user profile and navigation sections
    Then the user should see the header sections "add your style", "style me", "curate me", and "follow me"
    And the user should see the welcome message "Welcome, <username>"
    And the user should see the email "<user_email>"
    And the user should see follower details with "<followers_count> Followers", "<following_count> Following", and "<follow_request_count> Follow Request"

  @positive
  Scenario: Verify 'Your Style Journey in 3 Steps' section is displayed correctly
    Then the user should see the title "Your Style Journey in 3 Steps"
    And the subtitle should be "Effortlessly create, curate, and connect."
    And step 1 should display "Add Your Items" with description and a button "Add Your Items"
    And step 2 should display "Style a Look" with description and a button "Style a Look"
    And step 3 should display "Share Your Looks" with description and a button "Share Your Looks"

  @positive
  Scenario: Verify each Style Journey step navigates correctly
    When the user clicks on "Add Your Items"
    Then the system should navigate to the "Add Items" page

    When the user clicks on "Style a Look"
    Then the system should navigate to the "Style Me" page

    When the user clicks on "Share Your Looks"
    Then the system should navigate to the "Curate Me" or "My Looks" page

  @positive
  Scenario: Verify footer links are displayed correctly
    Then the user should see the footer links:
      | User Guide                                      |
      | Customer Care                                   |
      | About Us                                        |
      | Contact Us                                      |
      | FAQ                                             |
      | Privacy Policy                                  |
      | Terms & Conditions                              |
      | Don't Sell/Share My Info (California Only)      |
      | Limit use of personal information (California Only) |
    And the footer should display "©2025 FashionForwardInnovations, LLC. All rights reserved."

  # @negative
  # Scenario: Verify user details are not displayed when user data is missing
  #   Given the backend fails to return user data
  #   When the user visits the Home page
  #   Then the user should see an error message "Unable to fetch user information"
  #   And the user should not see the welcome text or followers section

  # @negative
  # Scenario: Verify ‘Your Style Journey’ buttons do not work when backend API is down
  #   Given the API for style journey is not responding
  #   When the user clicks on "Add Your Items"
  #   Then an error message "Service temporarily unavailable. Please try again later." should be shown

  @edge
  Scenario: Verify category section when user has no uploaded items
    Given the user has not uploaded any items
    When the user views the categories section
    Then the section should show "Sorry! No Items Found Here"

  # @edge
  # Scenario: Verify UI layout on smaller screen resolution
  #   Given the user resizes the browser to 375x667 pixels
  #   When the Home page loads
  #   Then all sections should be visible without horizontal scrolling
  #   And text and buttons should remain aligned properly

