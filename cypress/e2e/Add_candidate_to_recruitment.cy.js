import { login } from './Login.cy';

describe('Add candidate', () => {
  beforeEach(() => {
    login('m0bar0k', 'M0barok1234@');
  });

  it('Should successfully log in and add candidate', () => {
    cy.get(':nth-child(5) > .oxd-main-menu-item').click();

    cy.url().should('include', 'recruitment/viewCandidates');

    cy.contains(' Add ').click();

    cy.get('input[name="firstName"]').type('Kawser');
    cy.get('input[name="lastName"]').type('nawaz');

    cy.get('input[placeholder="Type here"]').eq(0).type('your-email@example.com');  // Adjust '0' to the correct index



    cy.get('textarea[placeholder="Type here"]').type('I am kawser nawaz');

    cy.get('button[type="submit"]').click();


    cy.url().should('include', '/recruitment');
  });
  it('Should successfully log and get Invalid name format', () => {
    cy.get(':nth-child(5) > .oxd-main-menu-item').click();

    cy.url().should('include', 'recruitment/viewCandidates');

    cy.contains(' Add ').click();

    cy.get('input[name="firstName"]').type('1Kawser');
    cy.get('input[name="lastName"]').type('nawaz');

    cy.get('input[placeholder="Type here"]').eq(0).type('your-email@example.com');  // Adjust '0' to the correct index



    cy.get('textarea[placeholder="Type here"]').type('I am kawser nawaz');

    cy.get('button[type="submit"]').click();


    cy.url().should('include', '/recruitment');
  });
});
