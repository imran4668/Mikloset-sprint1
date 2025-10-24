Feature: User Login
  As a registered user
  I want to login into the application
  So that I can access my account features

  Scenario Outline: Login with valid and invalid credentials
    Given I am on the login page
    When I enter username "<username>" and password "<password>"
    Then I should see "<expectedOutcome>" and if you see welcome storecookies 

    Examples:
      | username | password | expectedOutcome |
      | imran467267    | Imran@46726 | Welcome         |
      | imran023786@gmail.com  | Imran@46726    | Welcome|
      | imran023786@gmail.com   |   immma  | password not valid  |
      | imran023  |   immma  | username or email not valid |

      
