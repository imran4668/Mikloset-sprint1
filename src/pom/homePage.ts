import { Locator, Page ,expect} from "@playwright/test";
import dotenv from 'dotenv';

export default class HomePage {
    
    readonly page:Page;
    readonly signinLink:Locator;
    

    constructor(page:Page) {
        // dotenv.config();
        this.page = page;
        this.signinLink=page.locator('//*[@id="root"]/div[1]/div/div/div');
       
    }
    async goto(url?:String){
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('load')
        await this.page.goto(`${process.env.BASE_URL}${url}`);
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('load')
        console.log(`${process.env.BASE_URL}${url}`);
    }
    async navigateToLoginPage(){
        await this.page.waitForLoadState('networkidle');
        await this.signinLink.click();
        await this.page.waitForLoadState('networkidle');
    }
    

  
}