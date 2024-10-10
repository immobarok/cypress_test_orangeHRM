import { login } from './Login.cy';

describe('Delete if exists an user from empolyee list', () => {
  beforeEach(() => {
    login('m0bar0k', 'M0barok1234@'); // Use actual credentials
  });

  it('Should successfully Delete', () => {
    cy.get(':nth-child(2) > .oxd-main-menu-item').click();

    cy.url().should('include', 'pim/viewEmployeeList');

    cy.contains('Employee List').click();

    cy.get('oxd-icon-button').eq(1).click();


    cy.url().should('include', '/viewEmployeeList');
  });
});