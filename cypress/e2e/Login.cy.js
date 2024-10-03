// cypress/support/login.cy.js
export function login(username, password) {
  const baseUrl = 'http://localhost/orangehrm-5.7/orangehrm-5.7';

  cy.visit(baseUrl);
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();

  // Verify login
  cy.url().should('include', '/web/index.php/dashboard/index');
  cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard'); // Check that dashboard loads
}
