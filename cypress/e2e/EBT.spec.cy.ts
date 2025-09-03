import {HomePageObject} from "../support/POM/PageObject/HomePageObject";
import {LoginPageObject} from "../support/POM/PageObject/LoginPageObject";
import {SpecialsPageObject} from "../support/POM/PageObject/SpecialsPageObject";
import {LMSPageObject} from "../support/POM/PageObject/LMSPageObject";

describe('Login', () => {
    let homePage: HomePageObject;
    let loginPage: LoginPageObject;
    let specialsPage: SpecialsPageObject;
    let lmsPage: LMSPageObject;
    beforeEach(() => {
        cy.clearCache();
        homePage = new HomePageObject();
        loginPage = new LoginPageObject();
        specialsPage = new SpecialsPageObject();
        lmsPage = new LMSPageObject();
        homePage.navigateToHomePage();
        homePage.clickToAcceptAllCookies()
        homePage.clickToLoginLink();
        loginPage.clickBackToLoginWithEmailAndPasswordLink();
        loginPage.inputToEmailTextBox("qa-vn-ecom-04@stor.ai")
        loginPage.inputToPasswordTextBox("Abcd1234")
        loginPage.clickToSignButton();
    })
    it('Add and remove EBT card', () => {
        homePage.clickToSpecialsButton();
        specialsPage.addGradenFreshEggplantItemToCart();
        specialsPage.addMildJalapenoDipItemToCart();
        specialsPage.addOvenRoastedTukeyItemToCart();
        homePage.verifyTotalPriceInCart();
        homePage.verifyTotalItemInCart();
        homePage.clickToCheckOutButton();
        lmsPage.verifyTotalItemIncart();
        lmsPage.verifyTotalPriceIncart();
        lmsPage.clickCheckOutButton();








    })
})