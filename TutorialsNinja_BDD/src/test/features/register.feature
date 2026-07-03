Feature: User Registration tests
  
    Background: 
        Given User navigated to the application
        And User clicks the Account menu
        And User click on the register link

    Scenario: Valid registration
        And User enter the first name as "Harini"
        And User enter the last name as "Raja"
        And User enter the Email as "hariniraja39@gmail.com"
        And User enter the telephone as "9865204120"
        And User enter the Password as "harini"
        And User enter the conform password as "harini"
        And User click the policy check box
        When User click on the continue button
        Then success should be displayed

    Scenario: Register with an existing email
        And User enter the first name as "Harini"
        And User enter the last name as "Raja"
        And User enter the Email as "hariniraja39@gmail.com"
        And User enter the telephone as "7639704120"
        And User enter the Password as "harini"
        And User enter the conform password as "harini"
        And User click the policy check box
        When User click on the continue button
        Then Existing account warning should be displayed    