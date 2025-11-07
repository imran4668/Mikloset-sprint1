import { expect, Locator, Page } from '@playwright/test';

export default class SignupPage {
  readonly page: Page;
  readonly sinupWithMailButton: Locator;
  readonly googleButton: Locator;
  //signup from
  readonly fullName: Locator;
  readonly email: Locator;
  readonly userName: Locator;
  readonly password: Locator;
  readonly genderFemale: Locator;
  readonly genderMale: Locator;
  readonly genderNeutral: Locator;
  readonly singnUpButton: Locator;
  //dashboard
  readonly succesMsgToast: Locator;
  readonly welcomeMsgToast: Locator;
  //errors
  readonly fullNameError: Locator;
  readonly emailError: Locator;
  readonly userNameError: Locator;
  readonly passwordError: Locator;
  readonly genderError: Locator;






  constructor(page: Page) {
    this.page = page;
    this.sinupWithMailButton = page.getByTestId("sign_up_with_email_button");
    this.googleButton = page.getByTestId('google_button');
    //signup form
    this.fullName = page.getByTestId("fullname_field_input");
    this.email = page.getByTestId("email_field_input");
    this.userName = page.getByTestId("username_field_input");
    this.password = page.getByTestId("password_field_input");
    this.genderFemale = page.locator("//label[text()='Female']");
    this.genderMale = page.locator("//label[text()='Male']");
    this.genderNeutral = page.locator("//label[text()='Gender Neutral']");
    this.singnUpButton = page.getByTestId("sign_up_button");
    //dashboard
    this.succesMsgToast = page.locator('//*[@id="1"]/div[1]/div/div[2]/div[1]');
    this.welcomeMsgToast = page.locator('//*[@id="1"]/div[1]/div/div[2]/div[2]');
    //errors
    this.fullNameError = page.getByTestId("fullname_field_error_text");
    this.emailError = page.getByTestId("email_field_error_text");
    this.userNameError = page.getByTestId("username_field_error_text");
    this.passwordError = page.getByTestId("password_field_error_text");
    this.genderError = page.getByTestId("gender_field_error_text");







  }

  async openSignUpForm() {
    await this.sinupWithMailButton.click();
  }
  async enterFullName(fullName: string) {
    await this.fullName.fill(fullName);
  }
  async enterMail(mail: string) {
    await this.email.fill(mail);
  }
  async enterUserName(userName: string) {
    await this.userName.fill(userName);
  }
  async enterPassword(password: string) {
    await this.password.fill(password);
  }
  async enterGender(gender: string) {
    gender === "male" ? await this.genderMale.click() :
      gender === "female" ? await this.genderFemale.click() :
        await this.genderNeutral.click();
  }
  async pressSignupButton() {
    await this.singnUpButton.click();
  }
  async validateErrOrWelcomeMsg(err?:string){
    err==="User already exits with provided email"? await this.verifyValidationMsg(err):
    await this.verifyWelcomMsgToast();
  }
  async verifyWelcomMsgToast() {
    await expect(this.welcomeMsgToast).toContainText("Welcome");
    await expect(this.succesMsgToast).toContainText("User Signup successful");
  }
  async verifyDashbard() {
    await expect(this.page).toHaveURL(/dashboard/);
  }
  async verifyButtons(button: string) {
    button === "Continue with Google" ? await expect(this.googleButton).toBeVisible() :
      await expect(this.sinupWithMailButton).toBeVisible();
  }
  async verifyFields() {
    await expect(this.fullName).toBeVisible();
    await expect(this.email).toBeVisible();
    await expect(this.userName).toBeVisible();
    await expect(this.password).toBeVisible();
  }
  async verifyGenders() {
    await expect(this.genderFemale).toBeVisible();
    await expect(this.genderMale).toBeVisible();
    await expect(this.genderNeutral).toBeVisible();
  }
  async verifySignupButton() {
    await expect(this.singnUpButton).toBeVisible();
  }
  async VerifySignupButtonDisable() {
    await expect(this.singnUpButton).toBeDisabled();
  }/**
 * This is the "controller" function.
 * It's now much cleaner and easier to add new error messages.
 */
async verifyValidationMsg(error?: string) {
  if (typeof error === 'string') {
    // A switch statement is much cleaner and fixes the bug 
    // you had with the '||' (OR) condition.
    switch (error) {
      case "Please enter valid email":
      case "User already exits with provided email":
        await this.verifyEmailError(error);
        break;

      case "Password must be minimum 6 characters, including at least letter, 1 numeric and 1 special character":
        await this.verifyPasswordError(error);
        break;

      case "minimum 2 characters":
        // Note: Your original code sent this to verifyUserNameError.
        // If it's for Full Name, change it to:
        // await this.verifyFullNameError(error);
        await this.verifyUserNameError(error);
        break;

      case "Username already exists":
      case "Sorry, only letters (a-z), numbers (0-9), and periods (.) are allowed.":
        await this.verifyUserNameError(error);
        break;

      case "Please select":
        await this.verifyGenderError(error);
        break;

      default:
        // This helps you find errors you haven't handled yet
        throw new Error(`WARNING: Unhandled error message in verifyValidationMsg: ${error}`);
    }
  } else {
    // This part is for checking all fields when no specific error is given
    // We can run these in parallel to make it faster
    await Promise.all([
      this.verifyUserNameError(),
      this.verifyEmailError(),
      this.verifyGenderError(),
      this.verifyFullNameError(),
      this.verifyPasswordError()
    ]);
  }
}

/**
 * Robust, simplified error verifiers.
 * They have NO flaky waits. They rely on Playwright's auto-waiting.
 */
async verifyUserNameError(error?: string) {
  if (typeof error === "string") {
    // Playwright will auto-wait for the element to appear and have this text
    await expect(this.userNameError).toContainText(error);
  } else {
    // Playwright will auto-wait for the element to appear
    await expect(this.userNameError).toBeVisible();
  }
}

async verifyFullNameError(error?: string) {
  if (typeof error === "string") {
    await expect(this.fullNameError).toContainText(error);
  } else {
    await expect(this.fullNameError).toBeVisible();
  }
}

async verifyEmailError(error?: string) {
  if (typeof error === "string") {
    await expect(this.emailError).toContainText(error);
  } else {
    await expect(this.emailError).toBeVisible();
  }
}

async verifyGenderError(error?: string) {
  if (typeof error === "string") {
    // I noticed you had a different check here. 
    // 'toContainText' is usually safer.
    await expect(this.genderError).toContainText(error);
  } else {
    await expect(this.genderError).toBeVisible();
  }
}

async verifyPasswordError(error?: string) {
  if (typeof error === "string") {
    await expect(this.passwordError).toContainText(error);
  } else {
    await expect(this.passwordError).toBeVisible();
  }
}
}