import { login } from "./Login.cy";

describe('Timesheet Module - Add Timesheet Modal', () => {

  beforeEach(() => {
    login('m0bar0k', 'M0barok1234@');
  });

  it('Should open the Add Timesheet Modal and fill in the date', () => {
    cy.get('.oxd-main-menu-item').contains('Time').click();

    cy.get('.oxd-button').contains('Add Timesheet').click();

    cy.get('input[type="date"]').type('2024-10-01');  // Example date

    cy.get('button[type="submit"]').click();

    cy.get('.oxd-toast').should('contain', 'Timesheet created successfully');
  });

  it('Should cancel the Add Timesheet action', () => {
    cy.get('.oxd-main-menu-item').contains('Time').click();
    cy.get('.oxd-button').contains('Add Timesheet').click();

    cy.get('.oxd-button').contains('Cancel').click();

    cy.get('.orangehrm-modal-header').should('not.exist');
  });
});
