import{Before, After, BeforeAll, AfterAll} from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';
import {CustomWorld} from '../world/CustomWorld';
import {logger} from '../utils/Logger';
import {LoginPage} from '../pages/LoginPage';
import {RegisterPage} from '../pages/RegisterPage';

let browser: Browser;
BeforeAll(async () =>{
    logger.info("Launching browser");
    browser=await chromium.launch({headless:false});
});

Before(async function (this: CustomWorld, scenario) {
    logger.info(`Starting Scenario: ${scenario.pickle.name}`);
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
    this.loginPage = new LoginPage(this.page);
    this.registerPage =new RegisterPage(this.page);
});

After(async function (this: CustomWorld, scenario) {
    if (scenario.result?.status === "FAILED") {
        if (this.page) {
            await this.page.screenshot({path: `reports/screenshots/${Date.now()}.png`,fullPage: true});
        }
        logger.error(`Scenario FAILED: ${scenario.pickle.name}`);
    }
    if (this.page){
        await this.page.close();
    }
    if (this.context) {
        await this.context.close();
    }
});

AfterAll(async()=>{
    logger.info("Closing browser");
    await browser.close();
});