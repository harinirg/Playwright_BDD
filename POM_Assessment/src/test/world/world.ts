import { Browser, BrowserContext, Page } from "@playwright/test";
import { Registerpage } from "../pages/Registerpage";
import { Loginpage } from "../pages/LoginPage";


export class CustomWorld {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;
    courseId!: string;
    registerpage!:Registerpage;
    loginpage!: Loginpage;

}

