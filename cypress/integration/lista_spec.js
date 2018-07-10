const primeiroelemento = n => cy.get('ul').children(n)


describe('Teste de lista dos acolhidos', function() {
    it('Clicar no acolhido na lista abre página de acolhido', function() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        });

        cy.visit('localhost:3000/login#');
        cy.get('input[name=nome]').type('Marlene');
        cy.get('input[name=senha]').type('marlene');
        cy.contains('Entrar').click();
        
        cy.get('li').first().click();
        cy.url().should('match', /acolhido\/.+$/);
    });      
  });