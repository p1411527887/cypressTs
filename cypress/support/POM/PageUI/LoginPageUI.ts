export class LoginPageUI {
    static readonly BACK_TO_LOGIN_WITH_EMAIL_AND_PASSWORD_LINK: string  = "//span[@class='login-email-password-text']";
    static readonly EMAIL_TEXTBOX: string  = "//input[@id='login_email']";
    static readonly PASSWORD_TEXTBOX: string  = "//input[@id='login_password']";
    static readonly SIGN_IN_BUTTON: string  = "//button[@type='submit']";
    static readonly ERROR_MESSAGE_INVALID_EMAIL: string  = "//div[@id='sp-inline-error-id_login_email']";
    static readonly ERROR_MESSAGE_INVALID_PASSWORD: string  = "//div[@id='sp-inline-error-id_login_password']";
    static readonly ERROR_MESSAGE_INVALID_PASSWORD_OR_EMAIL: string  = "//div[@class='login-err']/span";
    static readonly REGISTER_BUTTON : string  = "//button[text()='Register ']";


}