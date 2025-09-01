import {BasePage} from "../BasePage";
import {SpecialsPageUI} from "../PageUI/SpecialsPageUI";

export class SpecialsPageObject  extends  BasePage{

    public addGradenFreshEggplantItemToCart() : SpecialsPageObject  {
        return this.clickToElement(SpecialsPageUI.DYNAMIC_SPECIAL_PRODUCT('Garden Fresh Eggplant Dip'))
            .clickToElement(SpecialsPageUI.ADD_TO_CART_BUTTON('Garden Fresh Eggplant Dip'))
            .clickToElement(SpecialsPageUI.BACK_BUTTON);


    }

    public addMildJalapenoDipItemToCart(): SpecialsPageObject {
        return this.clickToElement(SpecialsPageUI.DYNAMIC_SPECIAL_PRODUCT('Mild Jalapeno Dip'))
            .clickToElement(SpecialsPageUI.ADD_TO_CART_BUTTON('Mild Jalapeno Dip'))
            .clickToElement(SpecialsPageUI.BACK_BUTTON);


    }

    public addOvenRoastedTukeyItemToCart(): SpecialsPageObject {
        return this.scrollToElement(SpecialsPageUI.DYNAMIC_SPECIAL_PRODUCT('Oven Roasted Turkey Breast'))
            .clickToElement(SpecialsPageUI.DYNAMIC_SPECIAL_PRODUCT('Oven Roasted Turkey Breast'))
            .clickToElement(SpecialsPageUI.ADD_TO_CART_BUTTON('Oven Roasted Turkey Breast'))
            .clickToElement(SpecialsPageUI.BACK_BUTTON);


    }
}