import { login } from './Login.cy';

describe('Maintenance login test', () => {
  beforeEach(() => {
    login('m0bar0k', 'M0barok1234@');
  });

  it('Should successfully log in to maintenance section after clicking the Maintenance menu', () => {
    cy.get(':nth-child(10) > .oxd-main-menu-item').click();

    cy.url().should('include', 'maintenance/purgeEmployee');

    cy.get('input[name="username"]').type('m0bar0k', { force: true });  
    cy.get('input[name="password"]').type('M0barok1234@', { force: true });  

    cy.get('button[type="submit"]').click(); 

    cy.url().should('include', '/maintenance');
  });
});
