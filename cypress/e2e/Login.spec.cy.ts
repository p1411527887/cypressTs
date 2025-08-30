import {HomePageObject} from "../support/POM/PageObject/HomePageObject";
import {LoginPageObject} from "../support/POM/PageObject/LoginPageObject";

describe('Login', () => {
    let homePage: HomePageObject;
    let loginPage: LoginPageObject;
    beforeEach(() => {
        homePage = new HomePageObject();
        loginPage = new LoginPageObject();
        homePage.navigateToHomePage();
        homePage.clickToAcceptAllCookies()
    })
    it('should be login successfully with valid account', () => {
        homePage.clickToLoginLink();
        loginPage.clickBackToLoginWithEmailAndPasswordLink();
        loginPage.inputToEmailTextBox("qa-vn-ecom-04@stor.ai")
        loginPage.inputToPasswordTextBox("Abcd1234")
        loginPage.clickToSignButton();
        homePage.verifyEilyUrl("https://testing.qa.prod.self-point.com/?domain=eliy.sites.self-point.com");
    });

    it('could not login with invalid email', () => {
        homePage.clickToLoginLink();
        loginPage.clickBackToLoginWithEmailAndPasswordLink();
        loginPage.inputToEmailTextBox("qa-vn-ecom-04")
        loginPage.inputToPasswordTextBox("Abcd1234")
        loginPage.clickToSignButton();
        loginPage.errorMessageInvalidEmailIsDisplayed("Please enter a valid email");
        loginPage.verifyEilyUrl("https://testing.qa.prod.self-point.com/?domain=eliy.sites.self-point.com&loginOrRegister=1");

    })

    it('could not login with invalid password', () => {
        homePage.clickToLoginLink();
        loginPage.clickBackToLoginWithEmailAndPasswordLink();
        loginPage.inputToEmailTextBox("qa-vn-ecom-04@stor.ai");
        loginPage.inputToPasswordTextBox("Ab");
        loginPage.clickToSignButton();
        loginPage.errorMessageInvalidPasswordOrEmailIsDisplayed("Your email or password seems to be wrong. Please try again");
        loginPage.verifyEilyUrl("https://testing.qa.prod.self-point.com/?domain=eliy.sites.self-point.com&loginOrRegister=1");

    })

    it('could not login with blank email', () => {
        homePage.clickToLoginLink();
        loginPage.clickBackToLoginWithEmailAndPasswordLink();
        loginPage.inputToPasswordTextBox("Abcd1234");
        loginPage.clickToSignButton();
        loginPage.errorMessageInvalidEmailIsDisplayed("Please enter your email");
        loginPage.verifyEilyUrl("https://testing.qa.prod.self-point.com/?domain=eliy.sites.self-point.com&loginOrRegister=1");

    })

    it('could not login with blank password', () => {
        homePage.clickToLoginLink();
        loginPage.clickBackToLoginWithEmailAndPasswordLink();
        loginPage.inputToEmailTextBox("qa-vn-ecom-04@stor.ai");
        loginPage.clickToSignButton();
        loginPage.errorMessageInvalidPasswordDisplayed("Please enter your password")
        loginPage.verifyEilyUrl("https://testing.qa.prod.self-point.com/?domain=eliy.sites.self-point.com&loginOrRegister=1");

    })


});