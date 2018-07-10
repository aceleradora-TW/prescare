describe('Teste de login', function() {
    it('Fazer login errado retorna mensagem de erro', function() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
        });


        cy.visit('localhost:3000/login#');
        cy.contains('Login');
    
        cy.get('input[name=nome]').type('Marlene');
        cy.get('input[name=senha]').type(' ');      
        cy.contains('Entrar').click();
        cy.contains('Informe os dados necessários');
    });


    it('Fazer login correto entra na lista', function() {
        cy.visit('localhost:3000/login#');
    cy.contains('Login');

    cy.get('input[name=nome]').type('Marlene');
            cy.get('input[name=senha]').type('marlene');

    cy.contains('Entrar').click();

    cy.url().should('include', '/lista-acolhidos');
    
    });

    });
    