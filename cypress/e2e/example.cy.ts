import { Paths } from 'consts/router';

describe('Example', () => {
  it('Successfully loads', () => {
    cy.visit(Paths.Home);
  });

  it('Image exists', () => {
    cy.get('.\\@entire\\.se__Link__Root').last().click();
    cy.get('.\\@entire\\.se__Image__Image').should('exist');
  });
});
