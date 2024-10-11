import { login } from './Login.cy';

describe('Delete if exists an user from employee list', () => {
  beforeEach(() => {
    login('m0bar0k', 'M0barok1234@'); // Use actual credentials
  });

  it('Should successfully delete an employee', () => {
    cy.get(':nth-child(2) > .oxd-main-menu-item').click();

    cy.url().should('include', 'pim/viewEmployeeList');

    cy.contains('Employee List').click();

    cy.get('.oxd-icon.bi-trash').first().click();
    cy.contains(" Yes, Delete ").click();
    cy.url().should('include', '/viewEmployeeList');
  });
});
