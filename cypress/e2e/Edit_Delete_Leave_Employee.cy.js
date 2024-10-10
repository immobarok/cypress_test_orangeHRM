import { login } from "./Login.cy.js";
describe('OrangeHRM Employee Test', () => {


  beforeEach(() => {
    login('m0bar0k', 'M0barok1234@');
  });

  it('Should edit an employee’s information', () => {
    cy.get(':nth-child(2) > .oxd-main-menu-item').click(); // Click on PIM section
    cy.get('input[placeholder="Employee Name"]').type('Ashraful Islam'); // Search employee

    // Submit search
    cy.get('button[type="submit"]').click();

    // Click on the employee's name to edit details
    cy.get('.oxd-table-body > :nth-child(1) > :nth-child(3) > a').click();
    cy.get('.orangehrm-edit-employee-name > .oxd-button').click(); // Click Edit

    // Change employee last name
    cy.get('input[name="lastName"]').clear().type('Smith');
    cy.get('button[type="submit"]').click(); // Save changes
    cy.get('.orangehrm-edit-employee-name').should('contain', 'John Smith'); // Verify update
  });

  // Test 5: Delete an Employee
  it('Should delete an employee', () => {
    cy.get(':nth-child(2) > .oxd-main-menu-item').click(); // Click on PIM section
    cy.get('input[placeholder="Employee Name"]').type('John Smith'); // Search employee

    // Submit search
    cy.get('button[type="submit"]').click();

    // Select employee by checking the checkbox
    cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label').click();
    cy.get('.oxd-button--label-danger').contains('Delete Selected').click(); // Click delete

    // Confirm deletion
    cy.get('.oxd-button--label-danger').contains('Yes, Delete').click();

    // Verify the employee was deleted
    cy.get('.oxd-table-body').should('not.contain', 'John Smith');
  });

  // Test 6: Verify Leave Management Section
  it('Should navigate to Leave section and verify leave request', () => {
    cy.get(':nth-child(3) > .oxd-main-menu-item').click(); // Click on Leave section
    cy.url().should('include', 'leave/defineLeavePeriod'); // Verify URL

    // Select leave date range
    cy.get('input[placeholder="From"]').click().clear().type('2024-10-01');
    cy.get('input[placeholder="To"]').click().clear().type('2024-10-31');

    // Click search
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-table-body').should('contain', 'Pending Approval'); // Verify leave results
  });

});
