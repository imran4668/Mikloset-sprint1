import { Given, Then, When } from "@cucumber/cucumber";
import dashboardPage from "../pom/dashboardPage";
import HomePage from "../pom/homePage";
import { LoginPage } from "../pom/loginPage";


let dashboard: dashboardPage;
let homepage: HomePage;
let loginpage: LoginPage;

Given('the user navigates to the Mikloset login page', async function () {
      homepage = new HomePage(this.page!);
      dashboard = new dashboardPage(this.page!);
      loginpage = new LoginPage(this.page!);
      await homepage.goto("/signin");
      console.log("if failed means check the credentials and baseurl");

});

Given('the user logs in with credentials for a {string} account user {string} and pass {string}', async function (gender, username, password) {
      try{              
            await loginpage.login(username, password);
            console.log(`Logging in as ${gender} user with username: ${username}`);
      }
      catch(err){
            console.log("if failed means check the credentials and baseurl beacuse its hard coded");
      }
});



Then('the background image should match the {string} background', async function (gender) {
await dashboard.verifyBackgroundImage(gender);
});


Then('the user should see the following categories:', async function (dataTable) {
      const expectedCategories = dataTable.raw().flat();
      await dashboard.verifyCategories(expectedCategories);
});
Then('the user should see the header sections {string}, {string}, {string}, and {string}', async function (string, string2, string3, string4) {

});




//common 


 
Given('the user should be in dashboard page in Mikloset', async function () {


});


Then('the user should see the welcome message {string}', async function (string) {


});


Then('the user should see the email {string}', async function (string) {


});


Then('the user should see follower details with {string}, {string}, and {string}', async function (string, string2, string3) {


});







Then('the user should see the title {string}', async function (string) {


});


Then('the subtitle should be {string}', async function (string) {


});


Then('step {int} should display {string} with description and a button {string}', async function (int, string, string2) {
    // Then('step {float} should display {string} with description and a button {string}', async function (float, string, string2) {


});










When('the user clicks on {string}', async function (string) {


});

Then('the system should navigate to the {string} page', async function (string) {


});












Then('the system should navigate to the {string} or {string} page', async function (string, string2) {


});







Then('the user should see the footer links:', async function (dataTable) {


});


Then('the footer should display {string}', async function (string) {


});







Given('the backend fails to return user data', async function () {


});


When('the user visits the Home page', async function () {


});


Then('the user should see an error message {string}', async function (string) {


});


Then('the user should not see the welcome text or followers section', async function () {


});







Given('the API for style journey is not responding', async function () {


});





Then('an error message {string} should be shown', async function (string) {


});







Given('the user has not uploaded any items', async function () {


});


When('the user views the categories section', async function () {


});


Then('the section should show {string}', async function (string) {


});







Given('the user resizes the browser to 375x667 pixels', async function () {


});

When('the Home page loads', async function () {


});



Then('all sections should be visible without horizontal scrolling', async function () {


});


Then('text and buttons should remain aligned properly', async function () {


});







Given('the user has accessibility preferences enabled \\(e.g., high contrast or screen reader)', async function () {


});





Then('all images should have alt text or be marked decorative', async function () {


});


Then('buttons should be keyboard accessible', async function () {


});


Then('color contrast should meet accessibility standards', async function () {


});





























