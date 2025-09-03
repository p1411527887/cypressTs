import {BasePage} from "../BasePage";
import {DeliveryPickUpPageUI} from "../PageUI/DeliveryPickUpPageUI";

export class DeliveryPickUpPageObject extends BasePage {


    public clickToTomorrowTimeSlot(): DeliveryPickUpPageUI {
        return this.waitForLoadingDisappear()
            .verifyElementVisible(DeliveryPickUpPageUI.TOMORROW_TIME_SLOT)
            .forceClickToElement(DeliveryPickUpPageUI.TOMORROW_TIME_SLOT);
        //                                                     ^
        //                                            Đúng - options ở tham số 2
    }

    public clickToTimeSlot():DeliveryPickUpPageUI {
        return this.verifyElementVisible(DeliveryPickUpPageUI.TIME_SLOT).clickToElement(DeliveryPickUpPageUI.TIME_SLOT);

    }

    public clickToNextButton() {
        return this.clickToElement(DeliveryPickUpPageUI.NEXT_BUTTON);

    }
}