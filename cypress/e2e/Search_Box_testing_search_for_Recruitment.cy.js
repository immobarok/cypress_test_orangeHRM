import { login } from './Login.cy';

describe('Search and navigate using top search bar', () => {
  beforeEach(() => {
    login('m0bar0k', 'M0barok1234@');
  });

  it('Searches for "Recruitment" using the top search bar and clicks the result', () => {
    cy.get('input[placeholder="Search"]').type('Recruitment');
    cy.contains('span', 'Recruitment').should('be.visible').click();
    cy.url().should('include', '/recruitment');
    cy.contains('h6', 'Recruitment').should('be.visible');
  });
});
