import { login } from './Login.cy';

describe('OrangeHRM Nationality Deletion', () => {
  beforeEach(() => {
    // Login before each test
    login('m0bar0k', 'M0barok1234@'); // Use actual credentials
  });

  it('Deletes a nationality from the list', () => {
    // Click on the "Admin" from the sidebar
    cy.get('a[href*="viewAdminModule"]').click(); // Use the href to match the Admin menu

    // Click on "Nationalities" from the top bar menu
    cy.get('a.oxd-topbar-body-nav-tab-item').contains('Nationalities').click(); // Updated to match the new structure

    // Select the nationality checkbox you want to delete (example: Afghan)
    cy.contains('td', 'Afghan').parent('tr').find('input[type="checkbox"]').check(); // Replace 'Afghan' with the nationality you want to delete

    // Click the delete button
    cy.get('button[title="Delete"]').click(); // Adjust this if your delete button has a different selector

    // Confirm deletion in the popup dialog
    cy.get('button[title="Confirm"]').should('be.visible').click(); // Ensure confirmation dialog is visible before clicking
  });
});
