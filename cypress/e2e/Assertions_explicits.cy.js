describe("Assertion", () => {
  it("Explicit Assertion", () => {
    cy.visit("http://localhost/orangehrm-5.7/orangehrm-5.7/web/index.php/auth/login")

    cy.get('input[placeholder="Username"]').type('m0bar0k')
    cy.get('input[placeholder="Password"]').type('M0barok1234@')
    cy.get('button[type="submit"]').click()

    let expName = "Mobarok  Ali"
    cy.get(".oxd-userdropdown-name").then((x) => {
      let actName = x.text()
      //BDD style
      expect(actName).to.equal(expName)
      expect(actName).to.not.equal(expName)
    })
  })
})