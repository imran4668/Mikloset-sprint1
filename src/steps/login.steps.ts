import { Given, Then, When } from "@cucumber/cucumber";
import HomePage from "../pom/homePage";
import { LoginPage } from "../pom/loginPage";
import { ICustomWorld } from "../support/world";


let homepage: HomePage;
let loginpage: LoginPage;

Given('I am on the Mikloset login page', async function (this: ICustomWorld) {
    homepage = new HomePage(this.page!);
    loginpage = new LoginPage(this.page!);
    await homepage.goto("/signin");

});

When('I enter username {string} and password {string}', async function (username, password) {
    await loginpage.login(username, password);
});


Then('I should see {string} and if you see welcome storecookies', async function (expectedOutcome) {

    await loginpage.validateLoginSuccess();

});

//negative
Then('I should see the error message {string}', async function (error) {
    if (error === "Password is not Valid") {
        await loginpage.validatePasswordErrors(error);
    }
    else if (error === "no account created") {
        await loginpage.validateUserNameErrors(error);
    }
    else if (error === "Please enter a Email or UserName") {
        await loginpage.validateUserNameErrors(error);
    }
    else if (error === "Please enter a Password") {
        await loginpage.validatePasswordErrors(error);
    }
    else if (error === "invalid input") {
        await loginpage.validateUserNameErrors(error);
    }

});



When('I try using {string} and {string}', async function (username, password) {
    await loginpage.login(username, password);

});

Then('the login button should be disabled', async function () {
    await loginpage.validateLoginButton();
});

When('I attempt login using {string} and {string}', async function (username, password) {
    await loginpage.login(username, password);

});



Then('I should see {string}', async function (message) {
    if (message === "Welcome") {
        await loginpage.validateLoginSuccess();
    }
    else if (message === 'Please enter a Email or UserName' || message === 'No account created' ) {

        await loginpage.validateUserNameErrors(message);
    }
    else {

        await loginpage.validatePasswordErrors(message);
    }

});

When('press login button', async function () {
    await loginpage.pressLoginButton();
});