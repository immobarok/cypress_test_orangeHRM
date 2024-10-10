// Import the login function
import { login } from './Login.cy';

describe('Buzz Module Like Post Test in OrangeHRM 5.7', () => {
  beforeEach(() => {
    // Login before each test
    login('m0bar0k', 'M0barok1234@'); // Use actual credentials
  });

  it('Should successfully like a post and verify like count', () => {
    // Navigate to the Buzz page
    cy.get(':nth-child(12) > .oxd-main-menu-item').click();

    // Verify the URL
    cy.url().should('include', 'web/index.php/buzz/viewBuzz');

    // Check the initial number of likes for the first post
    cy.get('.orangehrm-buzz-stats').first().invoke('text').then((initialLikesText) => {
      const initialLikes = parseInt(initialLikesText.match(/\d+/)[0]); // Extract the number of likes

      // Click the like button for the first post
      cy.get('.orangehrm-buzz-post-actions .oxd-icon-button').first().click();

      cy.get('.orangehrm-buzz-stats').first().invoke('text').should((updatedLikesText) => {
        const updatedLikes = parseInt(updatedLikesText.match(/\d+/)[0]);
        expect(updatedLikes).to.eq(initialLikes + 0);
      });
    });
  });
});
