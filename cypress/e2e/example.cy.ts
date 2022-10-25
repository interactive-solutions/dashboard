import { LinkSelectors, ImageSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';

describe('Example', () => {
  it('Successfully loads', () => {
    cy.visit(Paths.Home);
  });

  it('Image exists', () => {
    cy.getSelector(LinkSelectors.Root).last().click();
    cy.getSelector(ImageSelectors.Image).should('exist');
  });
});
