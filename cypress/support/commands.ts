/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import {BasePage} from "./POM/BasePage";
import 'cypress-iframe';


const basePage = new BasePage()

// Tạo custom command clearCache
Cypress.Commands.add('clearCache', () => {
    basePage.clearCache()
})

Cypress.Commands.add(
    "getIframeBody",
    (iframeSelector: string): Cypress.Chainable<JQuery<HTMLElement>> => {
        return cy
            .get(iframeSelector, { timeout: 20000 })
            .its("0.contentDocument.body").should("not.be.empty")
            .then((body) => cy.wrap(body));
    }
);


// Khai báo type cho TypeScript
declare global {
    namespace Cypress {
        interface Chainable {
            clearCache(): Chainable<void>
        }
    }
}