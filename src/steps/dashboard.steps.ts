import { Given, Then, When } from "@cucumber/cucumber";
import dashboardPage from "../pom/dashboardPage";
import { ICustomWorld } from "../support/world";


let dashboard:dashboardPage;

Given('the user is logged in and on the dashboard page using stored cookies', async function () {
   dashboard = new dashboardPage(this.page!);
    // Make sure navigateToDashboard is awaited
    await dashboard.navigateToDashboard();
    console.log("Navigated to dashboard");
    
    

});

Then('the dashboard should display the following menu options:', async function (dataTable) {
//    dashboard.validateMenuOptions(dataTable.rows())
   

});

Then('the dashboard should display a welcome message as {string}', async function (string) {

});

Then('the user email should be {string}', async function (string) {

});
When('the user clicks the {string} button', async function (string) {

});

Then('the system should navigate to the styling page successfully', async function () {

});

When('the user opens the {string} dropdown', async function (string) {

});

Then('the dropdown should contain the following options:', async function (dataTable) {

});

Then('each enabled option should be clickable', async function () {

});


Then('they should be navigated to the {string} page', async function (string) {

});

Then('if items are present, the item details should be stored for later use', async function () {

});

When('the user opens each category from the dashboard', async function () {

});

Then('the page should navigate correctly for each category', async function () {

});

Then('when the user hovers over a category', async function () {

});

Then('an {string} button should appear', async function (string) {

});


Then('they should be able to change the category picture successfully', async function () {

});

When('the user plays the {string} video', async function (string) {

});

Then('the video should start playing without error', async function () {

});