import {BasePage} from "../BasePage";
import {LMSPageUI} from "../PageUI/LMSPageUI";


export class LMSPageObject extends BasePage {


    public verifyTotalItemIncart(): LMSPageObject {
        return this.waitForLoadingDisappear().verifyTotalItem(LMSPageUI.TOTAL_ITEM_IN_CART,3)
            .verifyElementVisible(LMSPageUI.TOTAL_ITEM_IN_CART);
    }

    public verifyTotalPriceIncart(): LMSPageObject {
        return this.verifyElementHaveContainsText(LMSPageUI.TOTAL_PRICE_IN_CART,"20.27");

    }

    public clickCheckOutButton(): LMSPageObject {
        return this.clickToElement(LMSPageUI.CHECK_OUT_BUTTON);

    }
}