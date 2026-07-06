import { BrowserContext, Browser, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { logger } from "../utils/Logger";

export class CustomWorld {
    browser!:Browser;
    context!:BrowserContext;
    page!:Page;

    loginPage!:LoginPage;
    registerPage!:RegisterPage;
    log=logger;
}