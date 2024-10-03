describe('My first test', () => {
  it('verify title-positive', () => {
    cy.visit('http://localhost/orangehrm-5.7/orangehrm-5.7/web');

    cy.title().should('eq', 'OrangeHRM')
  })
  it('verify title-negative', () => {
    cy.visit('http://localhost/orangehrm-5.7/orangehrm-5.7/web');

    cy.title().should('eq', 'NotOrangeHRM')
  })
})