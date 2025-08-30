import {HomePageObject} from "../support/POM/PageObject/HomePageObject";
import {LoginPageObject} from "../support/POM/PageObject/LoginPageObject";
import {RegisterPageObject} from "../support/POM/PageObject/RegisterPageObject";
import {RandomDataGenerator} from "../fixtures/RandomDataGenerator";


describe('Login', () => {
    let homePage: HomePageObject;
    let loginPage: LoginPageObject;
    let registerPage: RegisterPageObject;
    const email = RandomDataGenerator.randomEmailWithPrefix('automation', 'store.ai');
    
    beforeEach(() => {
        homePage = new HomePageObject();
        loginPage = new LoginPageObject();
        registerPage = new RegisterPageObject();
        homePage.navigateToHomePage();
        homePage.clickToAcceptAllCookies()

    })
    it('Register successfully with valid data', () => {
        homePage.clickToLoginLink();
        loginPage.clickToRegisterButton();
        registerPage.inputToFirstNameTextBox("phat");
        registerPage.inputToLastNameTextBox("hong");
        registerPage.inputToEmailTextBox(email);
        registerPage.inputToPasswordTextBox("Abcd1234");
        registerPage.inputToConfirmPasswordTextBox("Abcd1234");
        registerPage.clickToIamNotRobotCheckBox();
        registerPage.clickToAgreeToTheTermsAndConditionsCheckBox();
        registerPage.clickToEmailMeOffersAndPromotionsCheckBox();
        registerPage.clickToEmailMeOffersAndPromotionsCheckBoxSMS();
        registerPage.clickToRegisterButton();
        homePage.verifyRegisterMessageSuccessfully("Thank you, Registration completed successfully");
        homePage.verifyNameOfAccount("phat hong");
        homePage.verifyEilyUrl("https://testing.qa.prod.self-point.com/?domain=eliy.sites.self-point.com")
    });



});