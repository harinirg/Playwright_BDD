import{Locator, Page} from "@playwright/test"
import{logger} from "../utils/Logger";

export class BasePage{
    constructor(protected page:Page){}
    async click(locator:Locator){
        logger.info(`Clicking:${locator}`);
        await locator.click();
    }

    async fill(locator:Locator, value:string){
        logger.info(`Filling:${locator}=>{value}`);
        await locator.fill(value);
    }
    async getText(locator:Locator){
        logger.info(`Getting text from :${locator}`);
        return await locator.textContent();
    }
    async goto(url:string){
        logger.info(`Navigate to : ${url}`);
        await this.page.goto(url);
    }
}