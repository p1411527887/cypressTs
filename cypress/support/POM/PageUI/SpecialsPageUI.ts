export class SpecialsPageUI {
    static readonly DYNAMIC_SPECIAL_PRODUCT = (itemName: string) =>
        `//div[text()='${itemName}']/ancestor::div[@class='item  special-item']`


    static readonly ADD_TO_CART_BUTTON = (itemName: string) =>
        `//h1[contains(text(),'${itemName}')]/ancestor::div[@class='product-data-wrap']/following-sibling::div//button[@class='no-design add-to-cart aria-show-focus']`

    static readonly BACK_BUTTON : string = "//span[text()='Back']/ancestor::button[@class='back-button full-screen-back no-design']"
}

