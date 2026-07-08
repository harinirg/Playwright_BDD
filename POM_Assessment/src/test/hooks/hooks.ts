import { CustomWorld } from "../world/world";
import { Before, After, BeforeAll, AfterAll } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { Registerpage } from "../pages/Registerpage";
import { Loginpage } from "../pages/LoginPage";


let browser: Browser;
BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
});

Before(async function (this: CustomWorld) {
    this.browser=browser;
    this.context=await browser.newContext();
    this.page=await this.context.newPage();
    this.registerpage=new Registerpage(this.page);
    this.loginpage = new Loginpage(this.page);

});

After(async function (this: CustomWorld, scenario) {
    if (scenario.result?.status === "FAILED") {
        const path = `reports/screenshots/${Date.now()}.png`;
        await this.page.screenshot({ path });
        console.log(`Screenshot FAILED:${scenario.pickle.name}`);
        console.log(`Screenshot saved:${path}`);
    } else {
        console.log(`Scenario PASSED:${scenario.pickle.name}`);
    }
    await this.page.close();
    await this.context.close();
});

AfterAll(async () => {
    await browser.close();
});