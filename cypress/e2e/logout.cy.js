
describe('logout', () => {
    beforeEach(() => {
        cy.login()
    });
 
    it('logout', () => {
       cy.logout()
    });
 });