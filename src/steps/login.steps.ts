import { Given, Then, When } from "@cucumber/cucumber";
import { getWorld } from "../support/pageFixture";
import HomePage from "../pom/homePage";
import { LoginPage } from "../pom/loginPage";


let homepage:HomePage;
let loginpage:LoginPage;
       
         Given('I am on the login page', async function () {    
            homepage = new HomePage(getWorld().page);
            loginpage = new LoginPage(getWorld().page);
            await homepage.goto("/signin");
           
         });
       
          When('I enter username {string} and password {string}', async function (username?:string,password?:string) {
              await loginpage.login(username!=undefined?username:"",password!=undefined?password:""); 
          });
          
         Then('I should see {string} and if you see welcome storecookies', async function (expectedOutcome:string) {
            if(expectedOutcome==="Welcome"){
                await loginpage.validateLoginSuccess();
               
            }
            else if(expectedOutcome==="password not valid"){
                await loginpage.validatePasswordNotValid();
            }
           
        });