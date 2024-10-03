describe('OrangeHRM Dashboard and Employee Management Test', () => {
  const baseUrl = 'http://localhost/orangehrm-5.7/orangehrm-5.7';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.get('input[name="username"]').type('m0bar0k');
    cy.get('input[name="password"]').type('M0barok1234@');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/web/index.php/dashboard/index');
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
