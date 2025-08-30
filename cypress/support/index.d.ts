// cypress/support/index.d.ts (tạo file mới nếu chưa có)
declare namespace Cypress {
    interface Chainable {
        xpath(selector: string): Chainable<JQuery<HTMLElement>>;
    }
}