
@Login
Feature: User Login Functionality
  As a registered Mikloset user
  I want to log in to the application
  So that I can securely access my personalized dashboard

  Background:
    Given I am on the Mikloset login page

  # Positive Scenarios
  @Positive
  Scenario: Successful login with valid username - imran467267
    When I enter username "imrans" and password "Mikloset@123"
    Then I should see "Welcome" and if you see welcome storecookies

  @Positive
  Scenario: Successful login with valid email - imran023786@gmail.com
    When I enter username "imran023786@gmail.com" and password "Imran@46726"
    Then I should see "Welcome" and if you see welcome storecookies

  @Positive
  Scenario: Successful login with case variation email - ImRan023786@gmail.com
    When I enter username "ImRan023786@gmail.com" and password "Imran@46726"
    Then I should see "Welcome" and if you see welcome storecookies


  # Negative Scenarios
  @Negative
  Scenario: Invalid password
    When I enter username "imran023786@gmail.com" and password "immma"
    Then I should see the error message "Password is not Valid"

  @Negative
  Scenario: Unregistered user
    When I enter username "imran023" and password "immma"
    Then I should see the error message "No account created"

  @Negative
  Scenario: Empty username
    When I enter username "" and password "Imran@46726"
    Then I should see the error message "Please enter a Email or UserName"

  @Negative
  Scenario: Empty password
    When I enter username "imran023786@gmail.com" and password ""
    Then I should see the error message "Please enter a Password"

  @Negative
  Scenario: Script injection attempt
    When I enter username "<script>alert(1)</script>" and password "test"
    Then I should see the error message "No Account created"


  # Edge Case Scenarios
  @Edge
  Scenario: Blank fields
    When I try using "" and ""
    Then the login button should be disabled
    And I should see the error message "Please enter a Email or UserName"

  @Edge
  Scenario: Trim whitespace from inputs
    When I attempt login using " imransoftsuave@gmail.com " and "Mikloset@123 "
    Then I should see "Welcome"

  @Edge
  Scenario: Case insensitive email
    When I attempt login using "IMRAN023786@GMAIL.COM" and "Imran@46726"
    Then I should see "Welcome"

  @Edge
  Scenario: Unicode input validation
    When I attempt login using "👨‍💻imran" and "Imran@46726"
    Then I should see "No account created"

  


  
  




