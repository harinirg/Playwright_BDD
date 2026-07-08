Feature: User Registration
  Background:
    Given the user is launched the url
    When the user clicks on the register button
  @Register
  Scenario: Register a new user successfully using CSV data
    When the user select the gender
    When the user enters the registration details 
    And the user clicks the Register button
    Then the user should be registered successfully

