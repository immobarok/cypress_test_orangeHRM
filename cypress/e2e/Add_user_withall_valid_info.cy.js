import { login } from './Login.cy';

describe('Add user with valid info', () => {
  beforeEach(() => {
    login('m0bar0k', 'M0barok1234@');
  });

  it('Should successfully added', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click();
    cy.url().should('include', '/admin/viewSystemUsers');

    cy.contains(' Add ').click();

    // Click on the User Role dropdown
    cy.get('.oxd-select-text-input').first().click();
    cy.get('.oxd-select-dropdown')
      .contains('Admin')
      .click();
    cy.get('input[placeholder="Type for hints..."]').eq(0).type('Ashraful  Islam');
    cy.get('.oxd-select-text-input').eq(1).click();  // Select the second dropdown (status)
    cy.get('.oxd-select-dropdown')
      .contains('Enabled')
      .click();
    cy.get('input.oxd-input--active').eq(1).type('ashraful0');  // Use eq(0) to target the first input field
    cy.get('input[type="password"]').eq(0).type('AdminPassword123@');
    cy.get('input[type="password"]').eq(1).type('AdminPassword123@');
    cy.get('.oxd-button').contains('Save').click();
  });
});
