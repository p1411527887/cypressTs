import {BasePage} from "../BasePage";
import {LoginPageUI} from "../PageUI/LoginPageUI";

export class LoginPageObject extends BasePage{

    public clickBackToLoginWithEmailAndPasswordLink() : LoginPageObject {
        return this.clickToElement(LoginPageUI.BACK_TO_LOGIN_WITH_EMAIL_AND_PASSWORD_LINK);

    }

    public inputToEmailTextBox(email: string): LoginPageObject {
        return this.sendKeyToElement(LoginPageUI.EMAIL_TEXTBOX, email);

    }

    public inputToPasswordTextBox(password : string) : LoginPageObject {
        return this.sendKeyToElement(LoginPageUI.PASSWORD_TEXTBOX, password);
    }

    public clickToSignButton() :LoginPageObject {
        return this.clickToElement(LoginPageUI.SIGN_IN_BUTTON);

    }

    public errorMessageInvalidEmailIsDisplayed(text : string) : LoginPageObject {
        return this.verifyElementHaveContainsText(LoginPageUI.ERROR_MESSAGE_INVALID_EMAIL,text)
                   .verifyElementVisible(LoginPageUI.ERROR_MESSAGE_INVALID_EMAIL);

    }

    public verifyEilyUrl(url :string) {
        return this.verifyUrl(url);
    }

    public errorMessageInvalidPasswordOrEmailIsDisplayed(text: string) : LoginPageObject {
        return this.verifyElementHaveContainsText(LoginPageUI.ERROR_MESSAGE_INVALID_PASSWORD_OR_EMAIL,text)
            .verifyElementVisible(LoginPageUI.ERROR_MESSAGE_INVALID_PASSWORD_OR_EMAIL);

    }

    public errorMessageInvalidPasswordDisplayed(text: string) : LoginPageObject {
        return this.verifyElementHaveContainsText(LoginPageUI.ERROR_MESSAGE_INVALID_PASSWORD,text)
            .verifyElementVisible(LoginPageUI.ERROR_MESSAGE_INVALID_PASSWORD);
    }

    public clickToRegisterButton() : LoginPageObject {
        return this.clickToElement(LoginPageUI.REGISTER_BUTTON);

    }
}