import { login } from './Login.cy';

describe('Add candidate', () => {
  beforeEach(() => {
    login('m0bar0k', 'M0barok1234@');
  });

  it('Should successfully create claim', () => {
    cy.get(':nth-child(11) > .oxd-main-menu-item').click();

    cy.url().should('include', 'claim/viewAssignClaim');

    cy.contains(' Assign Claim ').click();

    cy.get('input[placeholder = "Type for hints..."]').type('Ashraful Islam');


    cy.get('.oxd-select-text-input').eq(0).click();
    cy.get('.oxd-select-dropdown')
      .contains('CCL')
      .click();
    cy.get('.oxd-select-text-input').eq(1).click();
    cy.get('.oxd-select-dropdown')
      .contains('Bangladeshi Taka')
      .click();
    cy.contains('Create').click()

    cy.url().should('include', '/assignClaim');
  });
});
