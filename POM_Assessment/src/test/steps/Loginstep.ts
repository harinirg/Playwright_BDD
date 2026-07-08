import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/world";

Given("the user launched the Application",{ timeout: 60000 }, async function (this: CustomWorld) {
    await this.loginpage.launchapplication("https://demowebshop.tricentis.com/");
});

When("the user click to the Login link", async function (this: CustomWorld) {
    await this.loginpage.clickloginlink();
});

When("the user enters {string} and {string}",async function (this: CustomWorld,email: string,password: string) {
        await this.loginpage.enterLoginDetails(email, password);
    }
);

When("the user clicks the Login button", async function (this: CustomWorld) {
    await this.loginpage.clickLoginButton();
});

Then("the login result should be {string}",async function (this: CustomWorld, result: string) {
        if (result.toLowerCase() === "success") {
            await this.loginpage.verifySuccessfulLogin();
        } else {
            await this.loginpage.verifyFailedLogin();
        }
    }
);