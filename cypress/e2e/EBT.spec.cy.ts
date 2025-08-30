import {HomePageObject} from "../support/POM/PageObject/HomePageObject";
import {LoginPageObject} from "../support/POM/PageObject/LoginPageObject";
import {SpecialsPageObject} from "../support/POM/PageObject/SpecialsPageObject";

describe('Login', () => {
    let homePage: HomePageObject;
    let loginPage: LoginPageObject;
    let specialsPage: SpecialsPageObject;
    beforeEach(() => {
        homePage = new HomePageObject();
        loginPage = new LoginPageObject();
        specialsPage = new SpecialsPageObject();
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







    })
})