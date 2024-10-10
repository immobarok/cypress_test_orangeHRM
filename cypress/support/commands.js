// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress"/>

/// <reference types="cypress-xpath"/>

// cypress/support/commands.js

Cypress.Commands.add('fetchAndLogLinks', () => {
  cy.get('a').each(($link) => {
    const href = $link.attr('href')

    // Use a cy.request() call to check the status of the hyperlink
    cy.request(href).then((response) => {
      expect(response.status).to.eq(200) // Assert that the hyperlink status is 200 (OK)
    })
  })
})

Cypress.Commands.add('checkImages', () => {
  cy.get('img').each(($img) => {
    const src = $img.attr('src')

    // Use a cy.request() call to check the status of the image
    cy.request(src).then((response) => {
      expect(response.status).to.eq(200) // Assert that the image status is 200 (OK)
    })
  })
})

Cypress.Commands.add('loginHRM', (email, pwd) => {
  cy.visit('/')
  cy.get('input[placeholder="Username"]').type(email)
  cy.get('input[placeholder="Password"]').type(pwd)
  cy.get('button[type="submit"]').click({ force: true })

  // Use the "should" command to assert element visibility
  cy.get('.oxd-userdropdown') // Replace '.element-selector' with the actual selector of the element
    .should('be.visible')     // Use 'be.visible' to assert that the element is visible
})
