Feature: Home Page - Gender Based UI and Category Verification

  As a registered user with a specific gender
  I want the Home page to show gender-specific content
  So that my browsing experience matches my profile preferences

  Background:
    Given the user navigates to the Mikloset login page

  @male
  Scenario: Verify Home page for Male user
    Given the user logs in with credentials for a "male" account user "imrans" and pass "Mikloset@123"
    When the Home page loads
    Then the background image should match the "male" background
    And the user should see the following categories:
      | Accessories   |
      | Activewear    |
      | Beachwear     |
      | Beauty        |
      | Jeans         |
      | Miscellaneous |
      | Outerwear     |
      | Pants         |
      | Shirts        |
      | Shoes         |
      | Shorts        |
      | Suits         |
    # And the user should see the header sections "add your style", "style me", "curate me", and "follow me"

  @female
  Scenario: Verify Home page for Female user
    Given the user logs in with credentials for a "female" account user "tester500" and pass "Tester500!"
    When the Home page loads
    Then the background image should match the "female" background
    And the user should see the following categories:
      | Accessories   |
      | Activewear    |
      | Beachwear     |
      | Beauty        |
      | Dresses       |
      | Handbags      |
      | Jeans         |
      | Jumpsuit      |
      | Loungewear    |
      | Miscellaneous |
      | Outerwear     |
      | Pants         |
      | Shoes         |
      | Shorts        |
      | Skirts        |
      | Tops          |
    # And the user should see the header sections "add your style", "style me", "curate me", and "follow me"

  @genderNeutral
  Scenario: Verify Home page for Gender Neutral user
    Given the user logs in with credentials for a "gender neutral" account user "neu_qa" and pass "Mikloset@123"
    When the Home page loads
    Then the background image should match the "neutral" background
    And the user should see the following categories:
      | Accessories   |
      | Activewear    |
      | Beachwear     |
      | Beauty        |
      | Dresses       |
      | Handbags      |
      | Jeans         |
      | Loungewear    |
      | Miscellaneous |
      | Outerwear     |
      | Pants         |
      | Shirts        |
      | Shoes         |
      | Shorts        |
      | Skirts        |
      | Tops          |
    # And the user should see the header sections "add your style", "style me", "curate me", and "follow me"

 