import {BasePage} from "../BasePage";
import {HomePageUI} from "../PageUI/HomePageUI";

export class HomePageObject extends BasePage {

    public navigateToHomePage() : HomePageObject {
        return this.navigateTo("https://testing.qa.prod.self-point.com/?domain=eliy.sites.self-point.com")

    }

    public clickToAcceptAllCookies() : HomePageObject {
        return this.clickToElement(HomePageUI.ACCEPT_ALL_COOKIES);

    }

    public clickToLoginLink() : HomePageObject {
        return this.clickToElement(HomePageUI.LOGIN_LINK);

    }

    public verifyEilyUrl(expectedUrl : string) : HomePageObject {
        return this.verifyUrl(expectedUrl)
    }

    public verifyNameOfAccount(text : string) {
        this.verifyElementHaveContainsText(HomePageUI.NAME_OF_ACCOUNT, text)
            .verifyElementVisible(HomePageUI.NAME_OF_ACCOUNT)

    }

    public verifyRegisterMessageSuccessfully(text : string) {
        this.verifyElementHaveContainsText(HomePageUI.REGISTER_SUCCESSFULLY_MESSAGE, text)
            .verifyElementVisible(HomePageUI.REGISTER_SUCCESSFULLY_MESSAGE)

    }

    clickToSpecialsButton() {

    }
}