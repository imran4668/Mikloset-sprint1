@Signup
Feature: User Signup Functionality
  As a new Mikloset user
  I want to sign up using Google or Email
  So that I can create an account and access my personalized dashboard

  Background:
    Given I am on the Mikloset signup page
    And I click on Sign up with email

  # -------------------------------
  # UI Verification
  # -------------------------------
  @UI
  Scenario: Verify signup page elements are displayed correctly
  Given I am on the Mikloset signup page
    Then I should see "Continue with Google" option
    And I should see "Sign up with email" option 
    And I click on Sign up with email
    And I should see fields for "Full name", "Email address", "Username" and "Password"
    And I should see gender options "Female", "Male", and "Gender Neutral"
    And I should see a Sign up button


  # -------------------------------
  # Google Signup (not automated)
  # -------------------------------
#   @GoogleSignup
#   Scenario: Sign up using Google account (manual verification only)
#     When I click on "Continue with Google"
#     Then I should be redirected to the Google authentication page
#     # Manual: Verify successful login redirects to dashboard

  # -------------------------------
  # Positive Scenario
  # -------------------------------
  @Positive
  Scenario Outline: Successful signup using valid email details
      When I enter full name "<fullname>"
    And I enter email address "<email>"
    And I enter username "<username>"
    And I enter password "<password>"
    And I select gender "<gender>"
    And I click on Sign up button
    Then I should see a success message Signup successful or error "User already exits with provided email"
  

    Examples:
      | fullname     | email                  | username   | password  | gender         |
      | Imran Khan   | imranatddtysd@example.com      | imafjhgsran123   | Test@123  | Male           |
      | Sara Mathew  | sasdagfutra@example.com       | sawesrra001    | Test@456  | Female         |
      | Alex Taylor  | aleffydx@example.com       | aleqjfgwecx789    | Test@789  | Gender Neutral |

  # -------------------------------
  # Negative Scenarios
  # -------------------------------
  @Negative
  Scenario: Signup attempt with all fields blank
      When I leave all fields blank
    And I click on Sign up button
    Then the Sign up button should be disabled
    And I should see validation messages for required fields

  @Negative
  Scenario: Signup attempt with invalid email format
    When I enter email address "invalid-email"
     And I click on Sign up button
    Then I should see an error message "Please enter valid email"

  @Negative
  Scenario: Signup attempt with weak password
    When I enter password "12345"
    Then I should see an error message "Password must be minimum 6 characters, including at least letter, 1 numeric and 1 special character"

  @Negative
  Scenario: Signup attempt with already registered email
    When I enter email address "imran023786@gmail.com"
    And I enter password "Test@123"
    And I select gender "Male"
    When I enter username "imran467267"
    And I enter full name "Imran Khan"
     And I click on Sign up button
    Then I should see an error message "User already exits with provided email"

  @Negative
  Scenario: Signup attempt with already taken username
    When I enter username "imran46726"
    And I enter full name "Imran Khan"
    And I enter email address "imran@yopexample.com  "
    And I enter password "Test@123"
    And I select gender "Male"
    And I click on Sign up button
    Then I should see an error message "Username already exists"

  # -------------------------------
  # Edge Cases
  # -------------------------------
  @Edge
  Scenario: Signup with leading/trailing spaces in input fields
    When I enter full name "  Imran Khan  "
    And I enter email address "  imrantyiqwe@example.com  "
    And I enter username "  imryuiank  "
    And I enter password "  Test@123  "
    And I select gender "Male"
    And I click on Sign up button
    Then I should see a success message Signup successful or error "User already exits with provided email"

  @Edge
  Scenario: Signup with case-sensitive email and username
    When I enter full name "  Imran Khan  "
    And I enter email address "IMtytRAN@mILEXAMPLE.COM"
    And I enter username "ImRchan"
    And I enter password "  Test@123  "
    And I select gender "Male"
    And I click on Sign up button
    Then I should see a success message Signup successful or error "User already exits with provided email"
   

  @Edge
  Scenario: Signup with special characters in username
    When I enter username "imran@123"
    Then I should see an error message "Sorry, only letters (a-z), numbers (0-9), and periods (.) are allowed."

  @Edge
  Scenario: Signup without selecting gender
    Whenn I enter full name "  Imran Khan  "
    And I enter email address "IMRAN1456w@EXAMPLE.COM"
    And I enter username "ImRan"
    And I enter password "  Test@123  "
     And I click on Sign up button
    Then I should see an error message "Please select"
