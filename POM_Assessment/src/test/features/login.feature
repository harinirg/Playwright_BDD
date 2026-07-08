Feature: User Login

  Background:
  Given the user launched the Application
  When the user click to the Login link

  @Login
  Scenario Outline: Validate login with multiple credentials
    When the user enters "<email>" and "<password>"
    And the user clicks the Login button
    Then the login result should be "<result>"

    Examples:
      | email                  | password  | result  |
      | harinirg26@gmail.com   | Harini@26 | success |
      | wrong@gmail.com        | wrong@123 | failure |