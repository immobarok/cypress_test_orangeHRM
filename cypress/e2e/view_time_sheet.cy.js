import { login } from "./Login.cy";

describe('Timesheet Module - Add Timesheet Modal', () => {

  beforeEach(() => {
    // Assuming login function is imported or you use Cypress commands for login
    login('m0bar0k', 'M0barok1234@');
  });

  it('Should open the Add Timesheet Modal and fill in the date', () => {
    // Click on "Time" tab to navigate to the Timesheet page
    cy.get('.oxd-main-menu-item').contains('Time').click();

    // Click on "Add Timesheet" button to open the modal
    cy.get('.oxd-button').contains('Add Timesheet').click();

    // Fill in the date input with a valid date (Adjust selector if needed)
    cy.get('input[type="date"]').type('2024-10-01');  // Example date

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify that a success message is displayed
    cy.get('.oxd-toast').should('contain', 'Timesheet created successfully');
  });

  it('Should cancel the Add Timesheet action', () => {
    // Open the Add Timesheet modal as above
    cy.get('.oxd-main-menu-item').contains('Time').click();
    cy.get('.oxd-button').contains('Add Timesheet').click();

    // Cancel the modal
    cy.get('.oxd-button').contains('Cancel').click();

    // Ensure the modal is no longer visible
    cy.get('.orangehrm-modal-header').should('not.exist');
  });
});
