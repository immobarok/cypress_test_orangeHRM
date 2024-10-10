// Import the login function
import { login } from './Login.cy';

describe('Buzz Module Tests in OrangeHRM 5.7', () => {
  beforeEach(() => {
    // Login before each test
    login('m0bar0k', 'M0barok1234@'); // Use actual credentials
  });

  it('Should successfully comment on a post', () => {
    // Navigate to the Buzz page
    cy.get(':nth-child(12) > .oxd-main-menu-item').click();

    // Verify the URL
    cy.url().should('include', 'web/index.php/buzz/viewBuzz');

    // Comment on the first post
    cy.get('.orangehrm-buzz-post-actions').first().click();
    cy.get('.orangehrm-buzz-comment').type('Great news, looking forward to it!{enter}');

    // Verify the comment
    cy.get('.oxd-buzz-post-comment-text').first().should('contain', 'Hi');
  });
});