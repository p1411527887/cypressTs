import {BasePage} from "../BasePage";
import {PaymentPageUI} from "../PageUI/PaymentPageUI";

export class PaymentPageObject extends BasePage {

    public inputEBTAmountToPay(number : string) : PaymentPageObject {
        return this.sendKeyToElement(PaymentPageUI.EBT_AMOUNT_TO_PAY_TEXTBOX, number)
    }

    public inputCVV(number : string) : PaymentPageObject {
        return this.sendKeyToElement(PaymentPageUI.CREDIT_CCV_TEXTBOX, number)
    }

    public clickToPlaceOderButton() : PaymentPageObject{
        return this.clickToElement(PaymentPageUI.PLACE_ORDER_BUTTON);
    }

    public clickToEBTButton(): PaymentPageObject {
        return this.clickToElement(PaymentPageUI.EBT_BUTTON);

    }

    public clickToProceedToPINCode(): PaymentPageObject {
        return this.clickToElement(PaymentPageUI.PROCEED_TO_PIN_CODE);

    }

    public inputPinNumber(): PaymentPageObject{
        this.waitASecond()
        this.clickElementInIframe(PaymentPageUI.PIN_IFRAME,PaymentPageUI.PIN_NUMBER_ONE_BUTTON,4)
        return this;
    }





    public clickToSubmitButton() {
        return this.clickElementInIframe(PaymentPageUI.PIN_IFRAME,PaymentPageUI.SUBMIT_BUTTON);

    }
}