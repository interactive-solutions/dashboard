import { Paths } from 'consts/router';

describe('Login', () => {
  it('Successfully loads login page', () => {
    cy.visit(Paths.Login);
  });
});
