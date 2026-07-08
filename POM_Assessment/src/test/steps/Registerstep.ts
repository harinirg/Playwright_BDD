import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/world";
import { readRegisterData } from "../utils/csvReader";

Given("the user is launched the url", async function (this: CustomWorld) {
    await this.registerpage.launchapplication("https://demowebshop.tricentis.com/");
});

When("the user clicks on the register button", async function (this: CustomWorld) {
    await this.registerpage.clickregisterLink();
    await this.registerpage.verifyRegisterPage();
});

When("the user select the gender", async function (this: CustomWorld) {
    await this.registerpage.clickgender();
});

When("the user enters the registration details", async function (this: CustomWorld) {
    const data = readRegisterData()[0]!;
    await this.registerpage.enterRegisterDetails(data.fname,data.lname,data.email,data.password,data.confirmpassword);
});

When("the user clicks the Register button", async function (this: CustomWorld) {
    await this.registerpage.clickregisterbtn();
});

Then("the user should be registered successfully", async function (this: CustomWorld) {
    await this.registerpage.verifyRegistrationSuccess();
});