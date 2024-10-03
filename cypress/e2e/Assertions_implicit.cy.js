describe("Assertion", () => {
  it("Implicit Assertion", () => {
    cy.visit("http://localhost/orangehrm-5.7/orangehrm-5.7/web/index.php/auth/login")

    //should and
    cy.url().should('include', 'orangehrm-5.7')
      .and('eq', "http://localhost/orangehrm-5.7/orangehrm-5.7/web/index.php/auth/login")
      .and('contain', 'orangehrm')
      .and('not.contain', 'orangehrm 6.7')

    cy.title().should('include', 'Orange')
      .and('eq', "OrangeHRM")
      .and('contain', "HRM")

    cy.get('.orangehrm-login-branding > img').should('be.visible')
      .and('exist')

    //cy.xpath("//a").should('have.length', '5')//no of line

    cy.get('input[placeholder="Username"]').type('Mobarok')
    cy.get('input[placeholder="Username"]').should('have.value', 'Mobarok')

  })
})