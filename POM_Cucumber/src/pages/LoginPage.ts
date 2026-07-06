import {BasePage} from '../pages/BasePage'
import{logger} from "../utils/Logger";
import { expect } from "@playwright/test";

export class LoginPage extends BasePage{
    private loginlink=this.page.getByRole('link', { name: 'Login' });
    private email=this.page.getByRole('textbox', { name: 'E-Mail Address' });
    private password=this.page.getByRole('textbox', { name: 'Password' });
    private loginbtn=this.page.locator('input.btn.btn-primary');
    private myaccount=this.page.locator('i.fa.fa-user');
    private accountCreated=this.page.locator('h2:has-text("My Account")');
    private error=this.page.getByText('Warning: No match for E-Mail Address and/or Password.', { exact: true });

    async navigate() {
        logger.info("Navigating to TutorialsNinja");
        await this.goto("https://tutorialsninja.com/demo/");
    }

    async openLoginModal(){
        logger.info("Myaccount button click");
        await this.click(this.myaccount);
    }

    async loginPageLink(){
        logger.info("login click")
        await this.click(this.loginlink);
    }
    async enterEmail(email: string) {
        await this.fill(this.email, email);
    }

    async enterPassword(password: string) {
        await this.fill(this.password, password);
    }

    async clickLogin() {
        await this.click(this.loginbtn);
    }

    async verifyLoginSuccess() {
        await expect(this.accountCreated).toBeVisible();
    }

    async verifyLoginFailure() {
        await expect(this.error).toBeVisible();
    }
}