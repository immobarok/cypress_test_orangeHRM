import { login } from "./Login.cy.js";
describe('OrangeHRM Employee Search', () => {


  beforeEach(() => {

  });

  it('Should navigate to the Admin section successfully', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click();
    cy.url().should('include', '/admin/viewSystemUsers');
  });

  it('Should successfully add a new employee', () => {
    cy.get(':nth-child(2) > .oxd-main-menu-item').click();
    cy.get('.oxd-button').contains('Add').click();

    cy.get('input[name="firstName"]').type('Ashraful');
    cy.get('input[name="lastName"]').type('Islam');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/pim/viewPersonalDetails');
    cy.get('.orangehrm-edit-employee-name').should('contain', 'Ashraful');
  });

});
