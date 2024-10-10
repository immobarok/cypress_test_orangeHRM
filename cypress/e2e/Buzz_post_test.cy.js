// Import the login function
import { login } from './Login.cy';

describe('Buzz Module Post Test in OrangeHRM 5.7', () => {
  beforeEach(() => {
    // Login before each test
    login('m0bar0k', 'M0barok1234@'); // Use actual credentials
  });

  it('Should successfully create a post in the Buzz module', () => {
    // Navigate to the Buzz page
    cy.get(':nth-child(12) > .oxd-main-menu-item').click();

    // Verify the URL
    cy.url().should('include', 'web/index.php/buzz/viewBuzz');

    // Find the text area for creating a post
    cy.get('textarea.oxd-buzz-post-input[placeholder="What\'s on your mind?"]').type('This is a test post using Cypress.');

    // Click the "Post" button to submit the post
    cy.get('button[type="submit"]').contains('Post').click();

    // Verify that the new post appears in the feed
    cy.get('.orangehrm-buzz-post-body').first().should('contain.text', 'This is a test post using Cypress.');
  });
});
