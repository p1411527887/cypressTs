import {BasePage} from "../BasePage";
import {SpecialsPageUI} from "../PageUI/SpecialsPageUI";

export class SpecialsPageObject  extends  BasePage{

    public addGradenFreshEggplantItemToCart() : SpecialsPageObject  {
        return this.waitForLoadingDisappear().clickToElement(SpecialsPageUI.DYNAMIC_SPECIAL_PRODUCT('Buy Garden Fresh Eggplant Dip for ₪2.99'))
            .waitForLoadingDisappear().clickToElement(SpecialsPageUI.ADD_TO_CART_BUTTON('Buy Garden Fresh Eggplant Dip for ₪2.99'))
            .clickToElement(SpecialsPageUI.BACK_BUTTON);


    }

    public addMildJalapenoDipItemToCart(): SpecialsPageObject {
        return this.waitForLoadingDisappear().clickToElement(SpecialsPageUI.DYNAMIC_SPECIAL_PRODUCT('Buy Mild Jalapeno Dip for ₪3.79'))
            .waitForLoadingDisappear().clickToElement(SpecialsPageUI.ADD_TO_CART_BUTTON('Buy Mild Jalapeno Dip for ₪3.79'))
            .clickToElement(SpecialsPageUI.BACK_BUTTON);


    }

    public addOvenRoastedTukeyItemToCart(): SpecialsPageObject {
        return this.scrollToElement(SpecialsPageUI.DYNAMIC_SPECIAL_PRODUCT('Buy Oven Roasted Turkey Breast for ₪3.99'))
            .clickToElement(SpecialsPageUI.DYNAMIC_SPECIAL_PRODUCT('Buy Oven Roasted Turkey Breast for ₪3.99'))
            .clickToElement(SpecialsPageUI.ADD_TO_CART_BUTTON('Buy Oven Roasted Turkey Breast for ₪3.99'))
            .clickToElement(SpecialsPageUI.BACK_BUTTON);


    }
}