import { login } from './Login.cy.js'; // Ensure proper import of login function

describe('Leave Management Tests', () => {

  beforeEach(() => {
    login('m0bar0k', 'M0barok1234@');
  });

  it('Should set leave dates and verify leave request', () => {
    cy.contains('Leave').click(); // Click Leave section

    // Ensure page is loaded
    cy.get('.oxd-topbar-header-title').should('contain', 'Leave');

    // Debugging: Ensure input field exists before interacting
    cy.get('input[placeholder="From"]', { timeout: 10000 }).should('exist');

    // Try interacting with the input field
    cy.get('input[placeholder="From"]', { timeout: 10000 }).should('be.visible')
      .click({ force: true }) // Use force if necessary
      .clear()
      .type('2024-01-01');

    cy.get('input[placeholder="To"]').should('be.visible')
      .click({ force: true }) // Force-click if needed
      .clear()
      .type('2024-12-31');

    // Click search button
    cy.get('button[type="submit"]').click();

    // Verify the results
    cy.get('.oxd-table-body').should('contain', 'Pending Approval');
  });
});
