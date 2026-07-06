import{BasePage} from '../pages/BasePage';
import {expect} from '@playwright/test'
import {logger} from '../utils/Logger'

export class RegisterPage extends BasePage{
    private myaccount=this.page.locator("//span[text()='My Account']");
    private registerlink=this.page.locator("//a[text()='Register']");
    private firstname=this.page.locator("#input-firstname");
    private lastname=this.page.locator("#input-lastname");
    private email=this.page.locator('#input-email');
    private phone=this.page.locator("#input-telephone");
    private password=this.page.locator("#input-password");
    private confirmpass=this.page.locator("#input-confirm");
    private agree=this.page.locator("input[name='agree']");
    private continue=this.page.locator("input[value='Continue']");
    private accountcreate=this.page.locator("//h1[text()='Your Account Has Been Created!']");
    private errormessgae=this.page.getByText('Warning: E-Mail Address is already registered!', { exact: true });


    async navigate() {
        logger.info("Navigating to TutorialsNinja");
        await this.goto("https://tutorialsninja.com/demo/");
    }

    async myaccountbtn(){
        logger.info("Myaccount button click");
        await this.click(this.myaccount);
    }

    async registerPageLink(){
        logger.info("login click")
        await this.click(this.registerlink);
    }

    async registerfname(firstname: string) {
        await this.fill(this.firstname, firstname);
    }

    async registerlname(lastname: string){
        await this.fill(this.lastname, lastname);
    }
    async registeremail(email: string){
        await this.fill(this.email, email);
    }
    async registerphone(phone: string){
        await this.fill(this.phone, phone);
    }
    async registerpass(password: string){
        await this.fill(this.password, password);
    }
    async registerconfirmpass(confirmpass: string){
        await this.fill(this.confirmpass, confirmpass);
    }
    async registeragree(){
        await this.agree.check();//checkbox
    }
    async registercontinue(){
        await this.click(this.continue);
    }

    async verifyregistersuccess() {
        await expect(this.accountcreate).toBeVisible();
    }

    async verifyregisterfail() {
        await expect(this.errormessgae).toBeVisible();
    }

}