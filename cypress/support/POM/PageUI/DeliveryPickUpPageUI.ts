export class DeliveryPickUpPageUI {
    static readonly TOMORROW_TIME_SLOT: string =
        "(//div[@class='date today']/ancestor::div[@class='slider-items']/label)[2]/descendant::div[@class='date']";

    static readonly TIME_SLOT: string =
        "(//div[@class='date today']/ancestor::div[@class='slider-items']/label)[2]/descendant::span[@class='time']";

    static readonly NEXT_BUTTON: string ="//button[@class='no-design disabled-opacity next-button']"
}