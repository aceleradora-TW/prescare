describe('Teste de prescrição', function() {
    it('Clicar em "nova prescrição" redireciona para página de nova prescrição', function() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit('localhost:3000/login#');

        cy.get('input[name=nome]').type('Marlene');
        cy.get('input[name=senha]').type('marlene');

        cy.contains('Entrar').click();


        cy.visit('localhost:3000/acolhido/1');

        cy.contains('Nova Prescrição').click();

        cy.get('input[name=validade]').type('30/12/2022');
        cy.contains('Salvar').click();
    });

    it('Clicar em "Adicionar Medicamento" redireciona para página de editar medicamento', function() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit('localhost:3000/login#');
        cy.get('input[name=nome]').type('Marlene');
        cy.get('input[name=senha]').type('marlene');
        cy.contains('Entrar').click();
        cy.visit('localhost:3000/acolhido/1/prescricao/1/edit');

        cy.contains('Adicionar medicamento').click();
        cy.get('input[name=nome]').type('Paracetamol');
        cy.get('input[name=dosagem]').type('500mg');
        cy.contains('Salvar').click();
        cy.contains('Paracetamol');
        
        cy.contains('Adicionar cuidados').click();
        cy.get('input[name=descricao]').type('Suco da uva');
        cy.get('input[name=intervalo]').type('4h-4h');
        cy.contains('Salvar').click();
        cy.contains('Suco da uva');
        
        cy.contains('Adicionar dieta').click();
        cy.get('input[name=tipo]').type('Hipercalorico');
        cy.get('input[name=intervalo]').type('3h-3h');
        cy.contains('Salvar').click();
        cy.contains('Hipercalorico');
    });

    it('Página de edição de medicamento permite excluir o medicamento', function() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit('localhost:3000/login#');
        cy.get('input[name=nome]').type('Marlene');
        cy.get('input[name=senha]').type('marlene');
        cy.contains('Entrar').click();
        cy.visit('localhost:3000/acolhido/1/prescricao/1/edit');
        
        cy.get('.td-botao').first().click();        
        cy.contains('Excluir').click();
        cy.url().should('match', /acolhido\/[1-99]\/prescricao\/[1-99]\/edit/);

        cy.visit('localhost:3000/acolhido/1/prescricao/1/edit/cuidado/1/edit');
        cy.contains('Excluir').click();
        cy.url().should('match', /acolhido\/[1-99]\/prescricao\/[1-99]\/edit/);

        cy.visit('localhost:3000/acolhido/1/prescricao/1/edit/dieta/1/edit');
        cy.contains('Excluir').click();
        cy.url().should('match', /acolhido\/[1-99]\/prescricao\/[1-99]\/edit/);
    });
});