// Import the login function
import { login } from './Login.cy';

describe('Logout from Orange HRM Application', () => {
  beforeEach(() => {
    login('m0bar0k', 'M0barok1234@'); // Use actual credentials
  });

  it('Should log out from the application', () => {
    cy.get('.oxd-userdropdown') // Select the user dropdown (assuming it has this class)
      .click();
    cy.get('a.oxd-userdropdown-link')
      .contains('Logout')
      .click();
    cy.url().should('include', '/auth/login');
    cy.get('h5').should('contain', 'Login');
  });
});
