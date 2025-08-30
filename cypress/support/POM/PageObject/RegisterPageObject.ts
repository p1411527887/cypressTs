import {BasePage} from "../BasePage";
import {RegisterPageUI} from "../PageUI/RegisterPageUI";
import {LoginPageUI} from "../PageUI/LoginPageUI";

export class RegisterPageObject extends BasePage {


    public inputToFirstNameTextBox(firstName :string) : RegisterPageObject {
        return this.sendKeyToElement(RegisterPageUI.FIRST_NAME_TEXTBOX, firstName);
    }


    public inputToLastNameTextBox(lastName : string) : RegisterPageObject {
        return this.sendKeyToElement(RegisterPageUI.LAST_NAME_TEXTBOX, lastName);
    }


    public inputToEmailTextBox(Email: string) : RegisterPageObject {
        return this.sendKeyToElement(RegisterPageUI.EMAIL_TEXTBOX, Email);
    }


    public inputToPasswordTextBox(password : string) : RegisterPageObject {
        return this.sendKeyToElement(RegisterPageUI.PASSWORD_TEXTBOX, password);
    }


    public inputToConfirmPasswordTextBox(confirmPassword : string) : RegisterPageObject {
        return this.sendKeyToElement(RegisterPageUI.CONFIRM_PASSWORD_TEXTBOX, confirmPassword);
    }


    public clickToIamNotRobotCheckBox() : this {
        return this.clickElementInIframe(RegisterPageUI.I_AM_NOT_ROBOT_CHECKBOX_IFRAME,RegisterPageUI.I_AM_NOT_ROBOT_CHECKBOX );
    }


    public clickToAgreeToTheTermsAndConditionsCheckBox() : RegisterPageObject {
        return this.clickToElement(RegisterPageUI.TERM_AND_CONDITIONS_CHECKBOX);
    }


    public clickToEmailMeOffersAndPromotionsCheckBox() : RegisterPageObject {
        return this.clickToElement(RegisterPageUI.EMAIL_ME_OFFERS_AND_PROMOTIONS);
    }


    public clickToEmailMeOffersAndPromotionsCheckBoxSMS() : RegisterPageObject  {
        return this.clickToElement(RegisterPageUI.TEXT_ME_OFFERS_AND_PROMOTIONS_SMS);
    }

    public clickToRegisterButton() : RegisterPageObject {
        return this.clickToElement(RegisterPageUI.REGISTER_BUTTON);
    }
}