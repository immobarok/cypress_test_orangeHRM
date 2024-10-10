// Import the login function
import { login } from './Login.cy';

describe('Buzz Module Share Post Test in OrangeHRM 5.7', () => {
  beforeEach(() => {
    login('m0bar0k', 'M0barok1234@');
  });

  it('Should successfully share a post by clicking the correct share button', () => {
    cy.get(':nth-child(12) > .oxd-main-menu-item').click();

    cy.url().should('include', 'web/index.php/buzz/viewBuzz');

    cy.get('.orangehrm-buzz-post-actions .oxd-icon-button').eq(1).click();
    cy.get('button[type="submit"].oxd-button--main').contains('Share').click();
  });
});
