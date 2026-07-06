import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { CustomWorld } from "../../world/CustomWorld";

setDefaultTimeout(60000);

Given("User navigate to the tutorialWebsite", async function (this: CustomWorld) {
    await this.loginPage.navigate();
});

Given("User click Myaccount link", async function (this: CustomWorld) {
    await this.loginPage.openLoginModal();
});

Given("User click the login link", async function (this: CustomWorld) {
    await this.loginPage.loginPageLink()
});

Given("User enter the email as {string}", async function (this: CustomWorld, email: string) {
    await this.loginPage.enterEmail(email);
});

Given("User enter the password1 as {string}", async function (this: CustomWorld, password: string) {
    await this.loginPage.enterPassword(password);
});

When("User click login button", async function (this: CustomWorld) {
    await this.loginPage.clickLogin();
});

Then("User should see Myaccount", async function (this: CustomWorld) {
    await this.loginPage.verifyLoginSuccess();
});

Then("User should see the unsuccess error message", async function (this: CustomWorld) {
    await this.loginPage.verifyLoginFailure();
});