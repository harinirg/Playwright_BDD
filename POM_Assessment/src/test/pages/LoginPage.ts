import{Page} from "@playwright/test";
import { Basepage } from "./Basepage";
import{expect} from "@playwright/test";
export class Loginpage extends Basepage{
    constructor(page: Page) {
        super(page);
        }
private loginlink=this.page.locator("//a[text()='Log in']");
private email=this.page.locator("#Email");
private password=this.page.locator("#Password");
private loginBtn=this.page.locator("//input[@value='Log in']");
private logoutLink = this.page.getByRole("link", { name: "Log out" });
private error=this.page.locator(".validation-summary-errors");

async clickloginlink(){
    await this.click(this.loginlink);
} 
async enterLoginDetails(email: string, password: string) {
        await this.fillInput(this.email, email);
        await this.fillInput(this.password, password);
    }

    async clickLoginButton() {
        await this.click(this.loginBtn);
    }

    async verifySuccessfulLogin() {
        await expect(this.logoutLink).toBeVisible();
    }

    async verifyFailedLogin() {
        await expect(this.error).toContainText("Login was unsuccessful");
    }
    }