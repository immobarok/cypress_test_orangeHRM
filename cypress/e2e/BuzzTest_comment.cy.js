// Import the login function
import { login } from './Login.cy';

describe('Buzz Comment Module Tests in OrangeHRM 5.7', () => {
  beforeEach(() => {
    login('m0bar0k', 'M0barok1234@'); // Use actual credentials
  });

  it('Should successfully comment on a post', () => {
    cy.get(':nth-child(12) > .oxd-main-menu-item').click();

    cy.url().should('include', 'web/index.php/buzz/viewBuzz');

    cy.get('.orangehrm-buzz-post-actions').first().click();
    cy.get('.orangehrm-buzz-comment').type('Great news, looking forward to it!{enter}');

    cy.get('.oxd-buzz-post-comment-text').first().should('contain', 'Hi');
  });
});