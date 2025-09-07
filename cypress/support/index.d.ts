// cypress/support/index.d.ts
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

export {};

declare global {
    namespace Cypress {
        type WaitGoneMode = 'auto' | 'not-exist' | 'not-visible';

        interface Chainable<Subject = any> {
            // Nếu dùng cypress-xpath
            xpath(selector: string): Chainable<JQuery<HTMLElement>>;

            // Lấy body trong iframe
            getIframeBody(iframeSelector: string): Chainable<JQuery<HTMLElement>>;

            /**
             * Chờ cho dialog/loading biến mất (không còn visible hoặc bị remove).
             * @param selector CSS selector của dialog/loading. Mặc định: 'div.dialog-body'
             * @param options
             * @param options.timeout timeout tổng (ms). Mặc định: 20000
             * @param options.requireAppear nếu true, bắt buộc phải thấy nó xuất hiện trước khi đợi biến mất
             * @param options.mode cách xác định "gone": 'auto' | 'not-exist' | 'not-visible'
             * @param options.ensureStable ms cần ổn định liên tục trước khi pass
             * @param options.root vùng gốc để find, mặc định là body
             */
            waitDialogGone(
                selector?: string,
                options?: {
                    timeout?: number;
                    requireAppear?: boolean;
                    mode?: WaitGoneMode;
                    ensureStable?: number;
                    root?: Chainable<JQuery<HTMLElement>>;
                }
            ): Chainable<void>;
        }
    }
}
