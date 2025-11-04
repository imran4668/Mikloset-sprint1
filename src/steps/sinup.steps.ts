import { Given, Then, When } from "@cucumber/cucumber";

import HomePage from "../pom/homePage";
import SignupPage from "../pom/sinupPage";
import { SnippetInterface } from "@cucumber/cucumber/lib/formatter/step_definition_snippet_builder/snippet_syntax";

let homepage:HomePage;
let signuppage:SignupPage;


 
         Given('I am on the Mikloset signup page', async function () {
            homepage = new HomePage(this.page!);
            signuppage = new SignupPage(this.page!);
            await homepage.goto("/signup");
          
         });
       
         When('I click on Sign up with email', async function () {
              await signuppage.openSignUpForm();        
         });
       
   
       
         When('I enter full name {string}', async function (fullName) {
            await signuppage.enterFullName(fullName);
            
           
         });
       
   
       
         When('I enter email address {string}', async function (email) {
            await signuppage.enterMail(email);
           
         });
       
   
       
         When('I enter username {string}', async function (username) {
            await signuppage.enterUserName(username);

           
         });
       
   
       
         When('I enter password {string}', async function (password) {
           await signuppage.enterPassword(password);
         });
       
   
       
         When('I select gender {string}', async function (gender) {
           await signuppage.enterGender(gender)
         });
       
   
       
         When('I click on Sign up button', async function () {
            await signuppage.pressSignupButton();
           
         });
       
   
       
         Then('I should see a success message Signup successful', async function () {
            await signuppage.verifyWelcomMsgToast();
           
         });
       
   
       
         Then('I should be redirected to the Mikloset dashboard', async function () {
           await signuppage.verifyDashbard();
         });
       

         //verify the signuppage

       
         Then('I should see {string} option', async function (buttons) {
            await signuppage.verifyButtons(buttons)
           
         });     

       
         Then('I should see fields for {string}, {string}, {string} and {string}', async function (name, mail, userName, password) {
            await signuppage.verifyFields();
             console.log('verifed:',name,mail,userName,password)
         });
       

       
         Then('I should see gender options {string}, {string}, and {string}', async function (Female,male,genderNeutral) {
            await signuppage.verifyGenders();
            console.log('verified:',Female,male,genderNeutral);
         });

       
         Then('I should see a Sign up button', async function () {
           await signuppage.verifySignupButton();
         });
       

         // signup attempt all fields blanks
   
       
         When('I leave all fields blank', async function () {
            console.log("Entire Fields is free");
            await signuppage.verifySignupButton();
          
         });
       
       
         Then('the Sign up button should be disabled', async function () {
            await signuppage.VerifySignupButtonDisable();
          
         });
       

       
         Then('I should see validation messages for required fields', async function () {
          await signuppage.verifyValidationMsg();
         });
       ;

         // Signup attempt with weak password

          Then('I should see an error message {string}', async function (error) {

               await signuppage.verifyValidationMsg(error);
         });

         

         