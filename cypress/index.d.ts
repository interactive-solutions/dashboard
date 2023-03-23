/// <reference types="cypress" />

declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Chainable {
    getSelector(value: string): Chainable<any>;
    findSelector(value: string): Chainable<any>;
  }
}
