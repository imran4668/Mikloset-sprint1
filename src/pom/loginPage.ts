import { Locator, Page ,expect} from "@playwright/test";

export class LoginPage {
    readonly page:Page;
    readonly userNameOrEmail: Locator;
    readonly password:Locator;
    readonly loginButton:Locator;
    readonly passErrors:Locator;
    readonly userNameErrors:Locator;
   
  

    
    
    

    constructor(page:Page) {
        this.page = page;
        this.userNameOrEmail=page.getByTestId('username_field_input');
        this.password=page.getByTestId('password_field_input');
        this.loginButton=page.getByTestId('login_button');   
        this.passErrors=page.getByTestId('password_field_error_text');   
        this.userNameErrors=page.getByTestId('username_field_error_text');
       
   
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
  
    async validatePasswordErrors(error:string){
        await expect(this.passErrors).toContainText(error)
    }
    async validateUserNameErrors(error:string){
        await expect(this.userNameErrors).toContainText(error);
    }
    async validateLoginButton(){
        await expect(this.loginButton).toBeDisabled();
    }
    async pressLoginButton(){
        await this.loginButton.click();
    }
   
    

        


}