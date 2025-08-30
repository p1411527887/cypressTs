export class RegisterPageUI {
    static readonly FIRST_NAME_TEXTBOX : string = "//input[@id='first_name']";
    static readonly LAST_NAME_TEXTBOX : string = "//input[@id='last_name']";
    static readonly EMAIL_TEXTBOX : string = "//input[@id='register_email']";
    static readonly PASSWORD_TEXTBOX : string = "//input[@id='register_password']";
    static readonly CONFIRM_PASSWORD_TEXTBOX : string = "//input[@id='confirm_password']";
    static readonly I_AM_NOT_ROBOT_CHECKBOX : string = "div.recaptcha-checkbox-border";
    static readonly TERM_AND_CONDITIONS_CHECKBOX : string = "//span[@class='box false']";
    static readonly EMAIL_ME_OFFERS_AND_PROMOTIONS : string = "//span[text()='Email me offers and promotions']/parent::span/preceding-sibling::span";
    static readonly TEXT_ME_OFFERS_AND_PROMOTIONS_SMS : string = "//span[text()='Text me offers and promotions sms']/parent::span/preceding-sibling::span";
    static readonly REGISTER_BUTTON : string = "//button[@type='submit']";
    static readonly I_AM_NOT_ROBOT_CHECKBOX_IFRAME : string = "iframe[title=\"reCAPTCHA\"]";

}