import { login } from './Login.cy.js'; // Ensure proper import of login function

describe('Leave Management Tests', () => {

  beforeEach(() => {
    login('m0bar0k', 'M0barok1234@');
  });

  it('Should set leave dates and verify leave request', () => {
    cy.contains('Leave').click(); // Click Leave section

    cy.get('.oxd-topbar-header-title').should('contain', 'Leave');

    cy.get('input[placeholder="From"]', { timeout: 10000 }).should('exist');

    cy.get('input[placeholder="From"]', { timeout: 10000 }).should('be.visible')
      .click({ force: true }) // Use force if necessary
      .clear()
      .type('2024-01-01');

    cy.get('input[placeholder="To"]').should('be.visible')
      .click({ force: true }) // Force-click if needed
      .clear()
      .type('2024-12-31');

    cy.get('button[type="submit"]').click();

    cy.get('.oxd-table-body').should('contain', 'Pending Approval');
  });
});
