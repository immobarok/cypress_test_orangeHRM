describe('OrangeHRM Login Test', () => {
  const baseUrl = 'http://localhost/orangehrm-5.7/orangehrm-5.7'; // Demo URL

  beforeEach(() => {
    cy.visit(baseUrl); // Visit the OrangeHRM login page
  });

  it('Should successfully login with valid credentials', () => {
    cy.get('input[name="username"]').type('m0bar0k');

    cy.get('input[name="password"]').type('M0barok1234@');

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/web/index.php/dashboard/index');

    cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard');
  });

  it('Should show error for invalid login credentials', () => {
    cy.get('input[name="username"]').type('InvalidUser');

    cy.get('input[name="password"]').type('InvalidPass');

    cy.get('button[type="submit"]').click();
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
  });

  it('Should show validation message for empty login fields', () => {
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-input-group__message').should('contain', 'Required');
  });
});
