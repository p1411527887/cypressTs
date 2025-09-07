import {BasePage} from "../BasePage";
import {DeliveryPickUpPageUI} from "../PageUI/DeliveryPickUpPageUI";

export class DeliveryPickUpPageObject extends BasePage {


    public clickToTomorrowTimeSlot(): DeliveryPickUpPageUI {
        this.waitForLoadingDisappear().waitASecond().clickToElement(DeliveryPickUpPageUI.TOMORROW_TIME_SLOT);
        return this;
    }

    public clickToTimeSlot():DeliveryPickUpPageUI {

        this.clickToElement(DeliveryPickUpPageUI.TIME_SLOT);
        return this;

    }

    public clickToNextButton() {
        return this.clickToElement(DeliveryPickUpPageUI.NEXT_BUTTON);

    }
}