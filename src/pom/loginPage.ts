import { Locator, Page ,expect} from "@playwright/test";

export class LoginPage {
    readonly page:Page;
    readonly userNameOrEmail: Locator;
    readonly password:Locator;
    readonly loginButton:Locator;
    readonly passnotvalid:Locator;
    
    

    constructor(page:Page) {
        this.page = page;
        this.userNameOrEmail=page.locator('//*[@id="root"]/section/div/div[2]/div/div/div[1]/div/input');
        this.password=page.locator('//*[@id="root"]/section/div/div[2]/div/div/div[2]/div/input');
        this.loginButton=page.locator('//*[@id="root"]/section/div/div[2]/div/div/button');   
        this.passnotvalid=page.locator("//p[contains(text(),'Password is not Valid')]");   
    }

    async login(username:string,password:string){
        console.log(`Logging in with username: ${username} and password: ${password}`);
        await this.userNameOrEmail.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
        await this.page.setDefaultTimeout(60000);
    }
    async validateLoginSuccess(){
        await expect(this.page.locator('//p[contains(text(),"Welcome")]')).toBeVisible();
        await this.page.context().storageState({ path: 'auth.json' });
        console.log('✅ Cookies saved to auth.json');
    }
  
    async validatePasswordNotValid(){
        await expect(this.passnotvalid).toBeVisible();
    }


}