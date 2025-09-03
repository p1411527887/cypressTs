export class LMSPageUI {
    static readonly TOTAL_ITEM_IN_CART :string = "//tr[@ng-repeat='line in category.items track by line.id']";
    static readonly TOTAL_PRICE_IN_CART :string = "//span[@class='sr-only-element']/parent::div[@class='value']";
    static readonly CHECK_OUT_BUTTON :string = "//button[@class='no-design disabled-opacity next-button']";
}