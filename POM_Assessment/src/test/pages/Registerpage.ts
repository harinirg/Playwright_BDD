import{Page} from "@playwright/test";
import { Basepage } from "./Basepage";
import{expect} from "@playwright/test";
export class Registerpage extends Basepage{
    constructor(page: Page) {
        super(page);
        }
    private registerlink=this.page.locator("//a[text()='Register']");
    private RegisterTitle=this.page.locator("//h1[text()='Register']");
    private gender=this.page.locator("#gender-female");
    private fname=this.page.locator("#FirstName");
    private lname=this.page.locator("#LastName");
    private email=this.page.locator("#Email");
    private password=this.page.locator("#Password");
    private confirmPassword = this.page.getByLabel("Confirm password:");
    private registerbtn=this.page.locator("//input[@id='register-button']");
    private registrationSuccess = this.page.getByText("Your registration completed");
    private continueBtn=this.page.locator("//input[@value='Continue']");
    async clickregisterLink(){
        await this.click(this.registerlink);
    }
    async verifyRegisterPage(){
        await expect(this.RegisterTitle).toBeVisible();
    }
    async clickgender(){
        await this.click(this.gender);
    }
    async enterRegisterDetails(firstName: string,lastName: string,email: string,password: string,confirmPassword: string) {
        await this.fillInput(this.fname, firstName);
        await this.fillInput(this.lname, lastName);
        await this.fillInput(this.email, email);
        await this.fillInput(this.password, password);
        await this.fillInput(this.confirmPassword, confirmPassword);
    }
    async clickregisterbtn(){
        await this.click(this.registerbtn);
    }
    async verifyRegistrationSuccess() {
        await expect(this.registrationSuccess).toBeVisible({ timeout: 10000 });
         await this.click(this.continueBtn);

    }


    }
