describe('OrangeHRM Login Test', () => {
  const baseUrl = 'http://localhost/orangehrm-5.7/orangehrm-5.7'; // Demo URL

  beforeEach(() => {
    cy.visit(baseUrl); // Visit the OrangeHRM login page
  });
  it('Should show error for non existent login credentials', () => {
    cy.get('input[name="username"]').type('NonExists');

    cy.get('input[name="password"]').type('1234@');

    cy.get('button[type="submit"]').click();
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
  });
});
