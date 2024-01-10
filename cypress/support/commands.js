Cypress.Commands.add('login', (username = Cypress.env('USERNAME'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
    cy.get('.app_logo').should('contain', 'Swag Labs')
});



Cypress.Commands.add('escolhaProdutos', (username = Cypress.env('USERNAME'), password = Cypress.env('PASSWORD')) => {
    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
       
});

Cypress.Commands.add('carrinhoCompras', (username = Cypress.env('USERNAME'), password = Cypress.env('PASSWORD')) => {
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.get('#item_4_title_link > .inventory_item_name').should('contain', 'Sauce Labs Backpack')
    cy.get('#item_0_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bike Light')
    cy.get('[data-test="checkout"]').click()
    
          
});
const faker = require('faker');
Cypress.Commands.add('cadastro', (username = Cypress.env('USERNAME'), password = Cypress.env('PASSWORD')) => {
    cy.url().should('include', '/checkout-step-one.html')
    let fakeName = faker.lorem.words(1)
    let fakeName2 = faker.lorem.words(2)
    cy.get('[data-test="firstName"]').type(fakeName)
    cy.get('[data-test="lastName"]').type(fakeName2)
    cy.get('[data-test="postalCode"]').type('30710500')
    cy.get('[data-test="continue"]').click()
    
});

Cypress.Commands.add('emitirNota', (username = Cypress.env('USERNAME'), password = Cypress.env('PASSWORD')) => {
    cy.url().should('include', '/checkout-step-two.html')
    cy.get(':nth-child(3) > .cart_item_label').should('exist')
    cy.get(':nth-child(4) > .cart_item_label').should('exist')
    cy.get(':nth-child(5) > .cart_item_label').should('exist')
    cy.get(':nth-child(6) > .cart_item_label').should('exist')
    cy.get('.summary_total_label').should('exist')
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('contain', 'Thank you for your order!')
    cy.get('[data-test="back-to-products"]').click()
    cy.url().should('include', '/inventory.html')
    
    
});

Cypress.Commands.add('logout', () => {
    cy.url().should('include', '/inventory.html')
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('exist', 'https://www.saucedemo.com/')
    
 });

 Cypress.Commands.add('crudNavegacao', () => {
    cy.url().should('include', '/inventory.html')
    cy.get('#item_4_title_link > .inventory_item_name').click()
    cy.get('.inventory_details_desc_container').should('exist')
    cy.get('[data-test="back-to-products"]').click()
    cy.get('#item_0_title_link > .inventory_item_name').click()
    cy.get('.inventory_details_desc_container').should('exist')
    cy.get('[data-test="back-to-products"]').click()
    cy.get('#item_1_title_link > .inventory_item_name').click()
    cy.get('.inventory_details_desc_container').should('exist')
    cy.get('[data-test="back-to-products"]').click()
    cy.get('#item_5_title_link > .inventory_item_name').click()
    cy.get('.inventory_details_desc_container').should('exist')
    cy.get('[data-test="back-to-products"]').click()
    cy.get('#item_3_title_link > .inventory_item_name').click()
    cy.get('.inventory_details_desc_container').should('exist')
    cy.get('[data-test="back-to-products"]').click()
    cy.get('#item_2_title_link > .inventory_item_name').click()
    cy.get('.inventory_details_desc_container').should('exist')
    cy.get('[data-test="back-to-products"]').click()

    
 });

 Cypress.Commands.add('crudOrdenacaoValor', () => {
    cy.url().should('include', '/inventory.html')
    cy.get('.product_sort_container').select('hilo').log('Do mais caro para o mais barato')
    cy.contains('Sauce Labs Fleece Jacket')
    cy.get('.product_sort_container').select('lohi').log('do mais barato para o mais caro')
    cy.contains('Sauce Labs Onesie')
    
 });

 Cypress.Commands.add('crudOrdenacaoOrdemAlfabetica', () => {
    cy.url().should('include', '/inventory.html')
    cy.get('.product_sort_container').select('az')
    cy.get('#item_4_title_link > .inventory_item_name').should('exist')
    cy.get('.product_sort_container').select('za')
    cy.get('#item_3_title_link > .inventory_item_name').should('exist')
    
    
 });

 Cypress.Commands.add('crudBtnAdicionar', () => {
    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('.shopping_cart_badge').should('have.length', 1).then((span) => {
        // Obtenha o texto dentro da <span>
        const spanText = span.text();
  
        // Verifique se o texto é igual a '6'
        const isTextEqualToSix = spanText === '6';
  
        // Asserção para verificar a condição
        expect(isTextEqualToSix).to.be.true;
      });
   
    
 });