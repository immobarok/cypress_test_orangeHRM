import { login } from './Login.cy';

describe('Maintenance login test', () => {
  beforeEach(() => {
    login('m0bar0k', 'M0barok1234@');
  });

  it('Should successfully log in to maintenance section after clicking the Maintenance menu', () => {
    cy.get(':nth-child(6) > .oxd-main-menu-item').click();

    cy.url().should('include', 'pim/viewPersonalDetails/empNumber/1');

    cy.get('input[name="lastName"]').type('Islam');//update last name ali to islam

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/empNumber');
  });
});
