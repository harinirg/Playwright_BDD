Feature: Register for TutorialsNinja website

Background:
Given the user is on the TutorialsNinja website
When the user clicks My Account
And the user clicks Register

@regression
Scenario: User should register successfully
And user enters first name "Harini"
And user enters last name "Raja"
And user enters email "dynamic"
And user enters telephone "9876543210"
And user enters password "Harini@26"
And user enters confirm password "Harini@26"
And user selects the privacy policy
When the user clicks Continue button
Then user should see Your Account Has Been Created


@regression
Scenario: exist user register not successful
And user enters first name "Harini"
And user enters last name "Raja"
And user enters email "demo1.123@gmail.com"
And user enters telephone "9876543210"
And user enters password "Demo@123"
And user enters confirm password "Demo@123"
And user selects the privacy policy
When the user clicks Continue button
Then User should see error message 