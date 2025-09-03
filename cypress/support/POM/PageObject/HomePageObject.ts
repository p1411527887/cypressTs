import {BasePage} from "../BasePage";
import {HomePageUI} from "../PageUI/HomePageUI";

export class HomePageObject extends BasePage {

    public navigateToHomePage() : HomePageObject {
        return this.navigateTo("https://testing.qa.prod.self-point.com/?domain=eliy.sites.self-point.com")

    }

    public clickToAcceptAllCookies() : HomePageObject {
        return this.waitForLoadingDisappear().clickToElement(HomePageUI.ACCEPT_ALL_COOKIES);

    }

    public clickToLoginLink() : HomePageObject {
        return this.waitForLoadingDisappear().clickToElement(HomePageUI.LOGIN_LINK);

    }

    public verifyEilyUrl(expectedUrl : string) : HomePageObject {
        return this.verifyUrl(expectedUrl)
    }

    public verifyNameOfAccount(text : string): HomePageObject {
        return  this.waitForLoadingDisappear().verifyElementHaveContainsText(HomePageUI.NAME_OF_ACCOUNT, text)
            .verifyElementVisible(HomePageUI.NAME_OF_ACCOUNT)

    }

    public verifyRegisterMessageSuccessfully(text : string): HomePageObject {
        return this.verifyElementHaveContainsText(HomePageUI.REGISTER_SUCCESSFULLY_MESSAGE, text)
            .verifyElementVisible(HomePageUI.REGISTER_SUCCESSFULLY_MESSAGE)

    }

    public clickToSpecialsButton(): HomePageObject {
        return this.waitForLoadingDisappear().clickToElement(HomePageUI.SPECIALS_BUTTON);

    }

    public verifyTotalPriceInCart(): HomePageObject {
        return this.waitForLoadingDisappear().verifyElementHaveContainsText(HomePageUI.TOTAL_PRICE_IN_CART,"20.27")
            .verifyElementVisible(HomePageUI.TOTAL_PRICE_IN_CART);

    }

    public verifyTotalItemInCart(): HomePageObject {
        return this.waitForLoadingDisappear().verifyTotalItem(HomePageUI.TOTAL_ITEM_IN_CART,3)
            .verifyElementVisible(HomePageUI.TOTAL_ITEM_IN_CART);
    }

    public clickToCheckOutButton(): HomePageObject {
        return this.clickToElement(HomePageUI.CHECK_OUT_BUTTON);

    }
}