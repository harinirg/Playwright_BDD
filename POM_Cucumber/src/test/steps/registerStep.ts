import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import {CustomWorld} from '../../world/CustomWorld';


setDefaultTimeout(60000);
Given("the user is on the TutorialsNinja website", async function (this:CustomWorld) {
    await this.registerPage.navigate();
});

When("the user clicks My Account", async function (this:CustomWorld) {
    await this.registerPage.myaccountbtn();
});

When("the user clicks Register", async function (this:CustomWorld) {
    await this.registerPage.registerPageLink();

});

When("user enters first name {string}", async function (this:CustomWorld,fname: string) {
    await this.registerPage.registerfname(fname);
});

When("user enters last name {string}", async function (this:CustomWorld, lname: string) {
    await this.registerPage.registerlname(lname);
});

When('user enters email {string}', async function (this: CustomWorld, email:string) {
  if (email==='dynamic') {
    email = `harini${Date.now()}@gmail.com`;
  }

  await this.registerPage.registeremail(email);
});

When("user enters telephone {string}", async function (this:CustomWorld, phone: string) {
    await this.registerPage.registerphone(phone);
});

When("user enters password {string}", async function (this:CustomWorld, password: string) {
    await this.registerPage.registerpass(password);
});

When("user enters confirm password {string}", async function (this:CustomWorld, confirmpass: string) {
    await this.registerPage.registerconfirmpass(confirmpass);
});

When("user selects the privacy policy", async function (this:CustomWorld) {
    await this.registerPage.registeragree();
});

When("the user clicks Continue button", async function (this:CustomWorld) {
    await this.registerPage.registercontinue();
});

Then("user should see Your Account Has Been Created", async function (this:CustomWorld) {
    await this.registerPage.verifyregistersuccess();
});

Then("User should see error message", async function (this:CustomWorld) {
    await this.registerPage.verifyregisterfail();
});