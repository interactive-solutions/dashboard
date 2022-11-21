import { Paths } from 'consts/router';

describe('Example', () => {
  it('Successfully loads', () => {
    cy.visit(Paths.Landing);
  });
});
