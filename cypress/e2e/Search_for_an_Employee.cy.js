import { login } from "./Login.cy.js";
describe('OrangeHRM Employee Search', () => {


  beforeEach(() => {
    login('m0bar0k', 'M0barok1234@');
  });

  it('Should search for an employee by name', () => {
    cy.get(':nth-child(2) > .oxd-main-menu-item').click(); // Click on PIM section
    cy.get('input[placeholder="Employee Name"]').type('Ashraful Islam'); // Search employee
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-table-body').should('contain', 'Ashraful Islam'); // Verify result
  });

});
