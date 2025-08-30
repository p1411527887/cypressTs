export class SpecialsPageUI {
    static readonly DYNAMIC_ITEM_ADD_TO_CART_BUTTON = (itemName: string) =>
        `//span[@class='promotion-description' and normalize-space(text())='${itemName}']/ancestor::div[@class='item  special-item']/div/div[@class='show-on-hover large-actions product-actions actions landscape']/button`
    static readonly DYNAMIC_ITEM_HOVER = (itemName: string) =>
        `//span[@class='promotion-description' and normalize-space(text())='${itemName}']/ancestor::div[@class='item  special-item']/div/div[@class='show-on-hover large-actions product-actions actions landscape']`

}