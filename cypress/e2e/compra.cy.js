describe('Compras', () => {
    beforeEach(() => {
        cy.login()
    });
 
    it('Compra', () => {
        cy.escolhaProdutos()
        cy.carrinhoCompras()
        cy.cadastro()
        cy.emitirNota()
    });
 });