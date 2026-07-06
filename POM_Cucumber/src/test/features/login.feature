Feature: Use Authentication test for tutorialninja
Background:
Given User navigate to the tutorialWebsite
And User click Myaccount link
And User click the login link

@smoke
Scenario:Login should be successful
And User enter the email as "demo.123@gmail.com"
And User enter the password1 as "Demo@123"
When User click login button
Then User should see Myaccount

@smoke
Scenario:Login should not be successful
And User enter the email as "demo.12@gmail.com"
And User enter the password1 as "Demo@123"
When User click login button
Then User should see the unsuccess error message