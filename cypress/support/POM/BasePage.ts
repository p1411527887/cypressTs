// cypress/support/pages/BasePage.ts

// Import worker_threads (hiện chưa dùng trong class này, có thể xóa nếu không cần)
import * as worker_threads from "node:worker_threads";

// Export class BasePage để các Page Object khác kế thừa (extends)
export class BasePage {

    // =========================
    // Helper: xác định loại selector (XPath hay CSS) và trả về chainable tương ứng
    // =========================
    private getElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
        // Nếu selector bắt đầu bằng '//' hoặc '(//' thì hiểu là XPath
        if (selector.startsWith('//') || selector.startsWith('(//')) {
            // Trả về chainable của cypress-xpath (cần plugin cypress-xpath)
            return cy.xpath(selector);
        } else {
            // Mặc định là CSS selector -> dùng cy.get
            return cy.get(selector);
        }
    }

    // =========================
    // Navigation methods (điều hướng trình duyệt)
    // =========================

    // Quay lại trang trước trong history
    protected goBack(): this {
        cy.go('back');       // Thực hiện hành động back
        return this;         // Trả về this để chain tiếp
    }

    // Tiến tới trang kế tiếp trong history
    protected goForward(): this {
        cy.go('forward');    // Thực hiện hành động forward
        return this;         // Trả về this để chain tiếp
    }

    // Reload (tải lại) trang hiện tại
    protected reloadPage(): this {
        cy.reload();         // Reload trang
        return this;         // Trả về this để chain tiếp
    }

    // Điều hướng đến một URL cụ thể
    protected navigateTo(url: string): this {
        cy.visit(url);       // Mở URL
        return this;         // Trả về this để chain tiếp
    }

    // =========================
    // Element interaction (tương tác với phần tử)
    // =========================

    // Click vào element theo selector
    protected clickToElement(selector: string): this {
        this.getElement(selector).click();   // Tìm element và click
        return this;                         // Trả về this để chain tiếp
    }

    // Gõ (type) text vào input
    protected sendKeyToElement(selector: string, text: string): this {
        this.getElement(selector)            // Tìm element
            .clear()                         // Xóa nội dung cũ
            .type(text);                     // Gõ nội dung mới
        return this;                         // Trả về this
    }

    // Chọn option trong <select> theo value
    protected selectDropdownByValue(selector: string, value: string): this {
        this.getElement(selector).select(value); // Chọn option theo value
        return this;                             // Trả về this
    }

    // Upload file vào input[type="file"]
    protected uploadFileToElement(selector: string, filePath: string): this {
        this.getElement(selector).selectFile(filePath); // Dùng selectFile của Cypress
        return this;                                     // Trả về this
    }

    // =========================
    // Verification (xác minh / assert)
    // =========================

    // Kiểm tra element tồn tại trong DOM
    protected verifyElementExists(selector: string): this {
        this.getElement(selector).should('exist'); // should exist
        return this;                               // Trả về this
    }

    // Kiểm tra element hiển thị
    protected verifyElementVisible(selector: string): this {
        this.getElement(selector).should('be.visible'); // visible
        return this;                                    // Trả về this
    }

    // Kiểm tra element bị ẩn
    protected verifyElementHidden(selector: string): this {
        this.getElement(selector).should('not.be.visible'); // not visible
        return this;                                        // Trả về this
    }

    // Kiểm tra element chứa text (partial)
    protected verifyElementHaveContainsText(selector: string, text: string): this {
        this.getElement(selector).should('contain.text', text); // contain text
        return this;                                            // Trả về this
    }

    // Kiểm tra input có value mong đợi (exact)
    protected verifyElementHasValue(selector: string, value: string): this {
        this.getElement(selector).should('have.value', value); // have value
        return this;                                           // Trả về this
    }

    // Kiểm tra URL hiện tại có chứa expectedUrl (substring)
    protected verifyUrl(expectedUrl: string): this {
        cy.url().should('include', expectedUrl); // include expectedUrl
        return this;                              // Trả về this
    }

    // Kiểm tra title trang đúng như mong đợi (exact)
    protected verifyPageTitle(expectedTitle: string): this {
        cy.title().should('eq', expectedTitle); // title equals
        return this;                            // Trả về this
    }

    // =========================
    // Wait methods (chờ đợi có kiểm soát)
    // =========================

    // Chờ element tồn tại trong DOM (dùng timeout custom)
    protected waitForElement(selector: string, timeout: number = 10000): this {
        this.getElement(selector).should('exist', { timeout }); // exist trong khoảng timeout
        return this;                                            // Trả về this
    }

    // Chờ element hiển thị (visible) với timeout
    protected waitForElementToBeVisible(selector: string, timeout: number = 10000): this {
        this.getElement(selector).should('be.visible', { timeout }); // visible trong timeout
        return this;                                                 // Trả về this
    }

    // Chờ URL chứa 1 đoạn path cụ thể trong timeout
    protected waitForUrl(url: string, timeout: number = 10000): this {
        cy.url({ timeout }).should('include', url); // include url trong timeout
        return this;                                // Trả về this
    }

    // Chờ page load hoàn tất (document.readyState === 'complete')
    protected waitForPageLoad(): this {
        cy.window()                                     // Lấy window
            .its('document.readyState')                   // Lấy thuộc tính readyState
            .should('equal', 'complete');                 // Đợi tới khi complete
        return this;                                     // Trả về this
    }

    // =========================
    // Utility methods (tiện ích)
    // =========================

    // Scroll element vào vùng nhìn thấy
    protected scrollToElement(selector: string): this {
        this.getElement(selector).scrollIntoView(); // scrollIntoView
        return this;                                // Trả về this
    }

    // Scroll lên đầu trang
    protected scrollToTop(): this {
        cy.scrollTo('top'); // scroll to top
        return this;        // Trả về this
    }

    // Scroll xuống cuối trang
    protected scrollToBottom(): this {
        cy.scrollTo('bottom'); // scroll to bottom
        return this;           // Trả về this
    }

    // Chụp screenshot (tùy chọn đặt tên file)
    protected takeScreenshot(fileName?: string): this {
        if (fileName) {
            cy.screenshot(fileName); // screenshot với tên custom
        } else {
            cy.screenshot();         // screenshot mặc định
        }
        return this;                 // Trả về this
    }

    // =========================
    // Get methods (trả về giá trị để dùng tiếp, không chain this)
    // =========================

    // Lấy text của element
    protected getElementText(selector: string): Cypress.Chainable<string> {
        return this.getElement(selector).invoke('text'); // invoke text -> trả về Chainable<string>
    }

    // Lấy value của input (ép về string)
    protected getElementValue(selector: string): Cypress.Chainable<string> {
        return this.getElement(selector)
            .invoke('val')                      // lấy value raw
            .then(val => String(val));         // ép kiểu thành string
    }

    // Lấy attribute cụ thể của element
    protected getElementAttribute(selector: string, attribute: string): Cypress.Chainable<string> {
        return this.getElement(selector).invoke('attr', attribute); // attr(attribute)
    }

    // Lấy URL hiện tại
    protected getCurrentUrl(): Cypress.Chainable<string> {
        return cy.url(); // trả về Chainable<string> URL
    }

    // Lấy page title hiện tại
    protected getPageTitle(): Cypress.Chainable<string> {
        return cy.title(); // trả về Chainable<string> title
    }

    // =========================
    // Alert/Modal methods (giả lập/kiểm soát alert/confirm)
    // =========================

    // Chuẩn bị stub cho window.alert (để assert alert đã gọi)
    protected acceptAlert(): this {
        cy.window().then((win) => {           // Lấy window
            cy.stub(win, 'alert').as('windowAlert'); // Stub hàm alert và đặt alias
        });
        return this;                           // Trả về this
    }

    // Stub window.confirm để trả về false (dismiss)
    protected dismissAlert(): this {
        cy.window().then((win) => {           // Lấy window
            cy.stub(win, 'confirm').returns(false); // Confirm trả về false
        });
        return this;                           // Trả về this
    }

    // =========================
    // Cookie methods
    // =========================

    // Set cookie
    protected setCookie(name: string, value: string): this {
        cy.setCookie(name, value); // set cookie theo tên và giá trị
        return this;               // Trả về this
    }

    // Lấy cookie theo tên
    protected getCookie(name: string): Cypress.Chainable<Cypress.Cookie | null> {
        return cy.getCookie(name); // trả về cookie hoặc null
    }

    // Xóa tất cả cookies
    protected clearCookies(): this {
        cy.clearCookies(); // clear all cookies
        return this;       // Trả về this
    }

    // =========================
    // Local Storage methods
    // =========================

    // Set item vào localStorage
    protected setLocalStorage(key: string, value: string): this {
        cy.window()                                   // Lấy window
            .its('localStorage')                        // Truy cập localStorage
            .invoke('setItem', key, value);             // setItem(key, value)
        return this;                                   // Trả về this
    }

    // Lấy item từ localStorage
    protected getLocalStorage(key: string): Cypress.Chainable<string | null> {
        return cy.window()                             // Lấy window
            .its('localStorage')                         // Truy cập localStorage
            .invoke('getItem', key);                     // getItem(key) -> string | null
    }

    // Xóa toàn bộ localStorage
    protected clearLocalStorage(): this {
        cy.clearLocalStorage(); // clear all localStorage
        return this;            // Trả về this
    }

    // =========================
    // Selector utilities (tiện ích thêm cho selector/list)
    // =========================

    // Verify số lượng element khớp selector
    protected verifyElementCount(selector: string, expectedCount: number): this {
        this.getElement(selector).should('have.length', expectedCount); // length === expected
        return this;                                                    // Trả về this
    }

    // Click element theo index trong danh sách
    protected clickElementByIndex(selector: string, index: number): this {
        this.getElement(selector).eq(index).click(); // chọn phần tử thứ index và click
        return this;                                 // Trả về this
    }

    // Gõ text vào element theo index trong danh sách
    protected typeTextByIndex(selector: string, index: number, text: string): this {
        this.getElement(selector)        // danh sách elements
            .eq(index)                   // chọn theo index
            .clear()                     // xóa
            .type(text);                 // gõ text
        return this;                     // Trả về this
    }

    // Verify element theo index là visible
    protected verifyElementVisibleByIndex(selector: string, index: number): this {
        this.getElement(selector).eq(index).should('be.visible'); // visible
        return this;                                              // Trả về this
    }

    // =========================
    // Iframe helpers
    // =========================

    // Lấy body của iframe (wrap thành chainable để thao tác)
    protected handleIframe(iframeSelector: string): Cypress.Chainable<any> {
        return this.getElement(iframeSelector)              // Tìm iframe
            .should("exist")                                // Đảm bảo tồn tại
            .its("0.contentDocument.body")                  // Truy cập body của document bên trong iframe
            .should("not.be.empty")                         // Đảm bảo body không rỗng
            .then(cy.wrap);                                 // wrap để tiếp tục chain Cypress
    }

    // Click element bên trong iframe, cho phép click nhiều lần (clickTimes)
    protected clickElementInIframe(
        iframeSelector: string,
        elementSelector: string,
        clickTimes: number = 1
    ): this {
        // Đầu tiên đảm bảo iframe hiển thị
        this.getElement(iframeSelector)
            .should("be.visible")                           // iframe visible
            .then(() => {
                cy.wait(6000);                              // chờ tĩnh (có thể thay bằng wait có điều kiện nếu được)

                // Truy cập body của iframe
                this.handleIframe(iframeSelector).within(() => {
                    // Lặp click theo số lần yêu cầu
                    for (let i = 0; i < clickTimes; i++) {
                        this.getElement(elementSelector)    // phần tử bên trong iframe
                            .should("be.visible")           // đảm bảo visible
                            .click();                       // click
                        cy.wait(500);                       // nghỉ giữa các lần click
                    }
                });
            });

        return this;                                        // Trả về this
    }

    // Thử click vùng iframe của reCAPTCHA (một số phiên bản hoạt động được)
    protected clickRecaptchaCheckbox(): this {
        cy.get("iframe[title='reCAPTCHA']")                 // tìm iframe reCAPTCHA
            .should('be.visible')                           // visible
            .then(($iframe) => {
                // Click trực tiếp lên iframe (một mẹo, không phải lúc nào cũng hiệu quả)
                cy.wrap($iframe).click();
            });

        return this;                                        // Trả về this
    }

    // Gõ text vào element bên trong iframe
    protected typeTextInIframe(iframeSelector: string, elementSelector: string, text: string): this {
        this.handleIframe(iframeSelector)       // lấy body iframe
            .find(elementSelector)              // tìm element bên trong
            .clear()                            // clear
            .type(text);                        // gõ text
        return this;                            // Trả về this
    }

    // Verify element bên trong iframe với assert động
    protected verifyElementInIframe(
        iframeSelector: string,
        elementSelector: string,
        assertion: string,
        value?: string
    ): this {
        const iframeBody = this.handleIframe(iframeSelector); // lấy body iframe

        if (value) {
            iframeBody.find(elementSelector).should(assertion as any, value); // should(assertion, value)
        } else {
            iframeBody.find(elementSelector).should(assertion as any);        // should(assertion)
        }
        return this;                                                          // Trả về this
    }

    // =========================
    // Cache/Cleanup helpers
    // =========================

    // Xóa cookies, localStorage, sessionStorage (dọn sạch state)
    clearCache() {
        cy.clearCookies();                      // clear cookies
        cy.clearLocalStorage();                 // clear localStorage
        cy.window().then((win) => {             // truy cập window
            win.sessionStorage.clear();         // clear sessionStorage
        });
    }

    // =========================
    // Hover & count helpers
    // =========================

    // Hover (trigger mouseover) lên element
    protected hoverToElement(selector: string): this {
        this.getElement(selector).trigger('mouseover'); // trigger mouseover
        return this;                                     // Trả về this
    }

    // Verify tổng số item khớp selector
    protected verifyTotalItem(selector: string, number: number): this {
        this.getElement(selector).should('have.length', number); // length === number
        return this;                                             // Trả về this
    }

    // =========================
    // Loading overlay helpers
    // =========================

    // Chờ loading/dialog biến mất nếu có; nếu không có thì bỏ qua
    protected waitForLoadingDisappear(): this {
        cy.get('body', { timeout: 20000 })                // lấy body với timeout
            .then($body => {
                // Kiểm tra có phần tử 'div.dialog-body' hay không
                if ($body.find("div[class='dialog-body']").length > 0) {
                    // Nếu có -> đợi nó không còn visible
                    cy.get("div[class='dialog-body']", { timeout: 20000 })
                        .should('not.be.visible');
                } else {
                    // Nếu không có -> ghi log và tiếp tục
                    cy.log('No dialog-body found → continue test');
                }
            });
        return this;                                      // Trả về this
    }

    // =========================
    // Force actions & waits
    // =========================

    // Click force (bỏ qua điều kiện bị che, không clickable,...)
    protected forceClickToElement(selector: string): this {
        this.getElement(selector).click({ force: true }); // force: true
        return this;                                      // Trả về this
    }

    // Chờ tĩnh 3 giây (không khuyến khích lạm dụng, ưu tiên wait có điều kiện)
    protected waitASecond(): this {
        cy.wait(3000);           // ngủ 3 giây
        return this;             // Trả về this
    }
}
