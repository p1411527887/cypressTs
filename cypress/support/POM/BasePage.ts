// cypress/support/pages/BasePage.ts
export  class BasePage {

    // Helper method to determine selector type and return appropriate Cypress chainable
    private getElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
        if (selector.startsWith('//') || selector.startsWith('(//')) {
            // XPath selector
            return cy.xpath(selector);
        } else {
            // CSS selector
            return cy.get(selector);
        }
    }

    // Navigation methods
    protected goBack(): this {
        cy.go('back');
        return this;
    }

    protected goForward(): this {
        cy.go('forward');
        return this;
    }

    protected reloadPage(): this {
        cy.reload();
        return this;
    }

    protected navigateTo(url: string): this {
        cy.visit(url);
        return this;
    }

    // Element interaction methods
    protected clickToElement(selector: string): this {
        this.getElement(selector).click();
        return this;
    }

    protected sendKeyToElement(selector: string, text: string): this {
        this.getElement(selector).clear().type(text);
        return this;
    }

    protected selectDropdownByValue(selector: string, value: string): this {
        this.getElement(selector).select(value);
        return this;
    }

    protected uploadFileToElement(selector: string, filePath: string): this {
        this.getElement(selector).selectFile(filePath);
        return this;
    }

    // Verification methods
    protected verifyElementExists(selector: string): this {
        this.getElement(selector).should('exist');
        return this;
    }

    protected verifyElementVisible(selector: string): this {
        this.getElement(selector).should('be.visible');
        return this;
    }

    protected verifyElementHidden(selector: string): this {
        this.getElement(selector).should('not.be.visible');
        return this;
    }

    protected verifyElementHaveContainsText(selector: string, text: string): this {
        this.getElement(selector).should('contain.text', text);
        return this;
    }

    protected verifyElementHasValue(selector: string, value: string): this {
        this.getElement(selector).should('have.value', value);
        return this;
    }

    protected verifyUrl(expectedUrl: string): this {
        cy.url().should('include', expectedUrl);
        return this;
    }

    protected verifyPageTitle(expectedTitle: string): this {
        cy.title().should('eq', expectedTitle);
        return this;
    }

    // Wait methods
    protected waitForElement(selector: string, timeout: number = 10000): this {
        this.getElement(selector).should('exist', {timeout});
        return this;
    }

    protected waitForElementToBeVisible(selector: string, timeout: number = 10000): this {
        this.getElement(selector).should('be.visible', {timeout});
        return this;
    }

    protected waitForUrl(url: string, timeout: number = 10000): this {
        cy.url({timeout}).should('include', url);
        return this;
    }

    protected waitForPageLoad(): this {
        cy.window().its('document.readyState').should('equal', 'complete');
        return this;
    }

    // Utility methods
    protected scrollToElement(selector: string): this {
        this.getElement(selector).scrollIntoView();
        return this;
    }

    protected scrollToTop(): this {
        cy.scrollTo('top');
        return this;
    }

    protected scrollToBottom(): this {
        cy.scrollTo('bottom');
        return this;
    }

    protected takeScreenshot(fileName?: string): this {
        if (fileName) {
            cy.screenshot(fileName);
        } else {
            cy.screenshot();
        }
        return this;
    }

    // Get methods (trả về giá trị thay vì this)
    protected getElementText(selector: string): Cypress.Chainable<string> {
        return this.getElement(selector).invoke('text');
    }

    protected getElementValue(selector: string): Cypress.Chainable<string> {
        return this.getElement(selector).invoke('val').then(val => String(val));
    }

    protected getElementAttribute(selector: string, attribute: string): Cypress.Chainable<string> {
        return this.getElement(selector).invoke('attr', attribute);
    }

    protected getCurrentUrl(): Cypress.Chainable<string> {
        return cy.url();
    }

    protected getPageTitle(): Cypress.Chainable<string> {
        return cy.title();
    }

    // Alert/Modal methods
    protected acceptAlert(): this {
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('windowAlert');
        });
        return this;
    }

    protected dismissAlert(): this {
        cy.window().then((win) => {
            cy.stub(win, 'confirm').returns(false);
        });
        return this;
    }

    // Cookie methods
    protected setCookie(name: string, value: string): this {
        cy.setCookie(name, value);
        return this;
    }

    protected getCookie(name: string): Cypress.Chainable<Cypress.Cookie | null> {
        return cy.getCookie(name);
    }

    protected clearCookies(): this {
        cy.clearCookies();
        return this;
    }

    // Local Storage methods
    protected setLocalStorage(key: string, value: string): this {
        cy.window().its('localStorage').invoke('setItem', key, value);
        return this;
    }

    protected getLocalStorage(key: string): Cypress.Chainable<string | null> {
        return cy.window().its('localStorage').invoke('getItem', key);
    }

    protected clearLocalStorage(): this {
        cy.clearLocalStorage();
        return this;
    }

    // Additional utility methods for better selector handling
    protected verifyElementCount(selector: string, expectedCount: number): this {
        this.getElement(selector).should('have.length', expectedCount);
        return this;
    }

    protected clickElementByIndex(selector: string, index: number): this {
        this.getElement(selector).eq(index).click();
        return this;
    }

    protected typeTextByIndex(selector: string, index: number, text: string): this {
        this.getElement(selector).eq(index).clear().type(text);
        return this;
    }

    protected verifyElementVisibleByIndex(selector: string, index: number): this {
        this.getElement(selector).eq(index).should('be.visible');
        return this;
    }

    protected handleIframe(iframeSelector: string): Cypress.Chainable<any> {
        return this.getElement(iframeSelector)
            .should('be.visible')
            .then(($iframe) => {
                // Wait for iframe to load
                return new Cypress.Promise((resolve) => {
                    const iframe = $iframe[0] as HTMLIFrameElement;

                    if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
                        resolve($iframe);
                    } else {
                        iframe.onload = () => resolve($iframe);
                    }
                });
            })
            .its('0.contentDocument.body')
            .should('exist')
            .then(cy.wrap);
    }

    // Click element bên trong iframe
    protected clickElementInIframe(iframeSelector: string, elementSelector: string): this {
        this.handleIframe(iframeSelector)
            .find(elementSelector)
            .click();
        return this;
    }

    protected clickRecaptchaCheckbox(): this {
        // Simple click on iframe area (works for some reCAPTCHA versions)
        cy.get("iframe[title='reCAPTCHA']")
            .should('be.visible')
            .then(($iframe) => {
                // Click on iframe element itself
                cy.wrap($iframe).click();
            });

        return this;
    }

    // Type text vào element trong iframe
    protected typeTextInIframe(iframeSelector: string, elementSelector: string, text: string): this {
        this.handleIframe(iframeSelector)
            .find(elementSelector)
            .clear()
            .type(text);
        return this;
    }

    // Verify element trong iframe
    protected verifyElementInIframe(iframeSelector: string, elementSelector: string, assertion: string, value?: string): this {
        const iframeBody = this.handleIframe(iframeSelector);

        if (value) {
            iframeBody.find(elementSelector).should(assertion as any, value);
        } else {
            iframeBody.find(elementSelector).should(assertion as any);
        }
        return this;
    }

    clearCache() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.window().then((win) => {
            win.sessionStorage.clear()
        })
    }

    protected hoverToElement(selector: string): this {
        this.getElement(selector).trigger('mouseover');
        return this;
    }

    protected verifyTotalItem(selector: string, number: number): this {
        this.getElement(selector).should('have.length', number);
        return this;
    }

    protected waitForLoadingDisappear(): this {
        cy.get("div[class='dialog-body']", {timeout: 10000})
            .should('not.be.visible');
        return this;
    }
    protected forceClickToElement(selector: string): this {
        this.getElement(selector).click({force: true});
        return this;
    }

}