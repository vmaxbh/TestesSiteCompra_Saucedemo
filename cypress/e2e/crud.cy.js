describe('crud', () => {
    beforeEach(() => {
        cy.login()
    });
 
    it('crudFull', () => {
          cy.crudNavegacao()
          cy.crudOrdenacaoValor()
          cy.crudOrdenacaoOrdemAlfabetica()
          cy.crudBtnAdicionar()

        
    });
 });