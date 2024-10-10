// Import the login function
import { login } from './Login.cy';

describe('Buzz Module Post Test in OrangeHRM 5.7', () => {
  beforeEach(() => {
    login('m0bar0k', 'M0barok1234@'); // Use actual credentials
  });

  it('Should successfully create a post in the Buzz module', () => {
    cy.get(':nth-child(12) > .oxd-main-menu-item').click();

    cy.url().should('include', 'web/index.php/buzz/viewBuzz');

    cy.get('textarea.oxd-buzz-post-input[placeholder="What\'s on your mind?"]').type('This is a test post using Cypress.');

    cy.get('button[type="submit"]').contains('Post').click();

    cy.get('.orangehrm-buzz-post-body').first().should('contain.text', 'This is a test post using Cypress.');
  });
});
