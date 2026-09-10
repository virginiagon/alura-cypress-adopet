describe('Tela de Login', () => {
    
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    });

    it('Acessa a página de Login e efetua o login com credenciais válidas', () => {
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
    });

    it('Acessa a página de Login e tenta efetuar o login com credenciais inválidas', () => {
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="input-loginEmail"]').type('anainvalido@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha321');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    });

});