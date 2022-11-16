import { ImageSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';

describe('Example', () => {
  it('Successfully loads', () => {
    cy.visit(Paths.Home);
  });

  it('Image exists', () => {
    cy.get('.\\@entire\\.se__Link__Root').last().click();
    cy.getSelector(ImageSelectors.Image).should('exist');
  });
});
