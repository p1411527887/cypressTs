import {HomePageObject} from "../support/POM/PageObject/HomePageObject";
import {LoginPageObject} from "../support/POM/PageObject/LoginPageObject";
import {SpecialsPageObject} from "../support/POM/PageObject/SpecialsPageObject";
import {LMSPageObject} from "../support/POM/PageObject/LMSPageObject";
import {DeliveryPickUpPageObject} from "../support/POM/PageObject/DeliveryPickUpPageObject";

describe('Login', () => {
    let homePage: HomePageObject;
    let loginPage: LoginPageObject;
    let specialsPage: SpecialsPageObject;
    let lmsPage: LMSPageObject;
    let deliveryPickUpPage: DeliveryPickUpPageObject;
    beforeEach(() => {
        cy.clearCache();
        homePage = new HomePageObject();
        loginPage = new LoginPageObject();
        specialsPage = new SpecialsPageObject();
        lmsPage = new LMSPageObject();
        deliveryPickUpPage = new DeliveryPickUpPageObject();
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
        deliveryPickUpPage.clickToTomorrowTimeSlot();
        deliveryPickUpPage.clickToTimeSlot();
        deliveryPickUpPage.clickToNextButton();












    })
})