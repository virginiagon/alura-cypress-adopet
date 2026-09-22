describe('Tela de Login', () => {
    
    beforeEach(() => {
        cy.visit('/');
        cy.get('[data-test="login-button"]').click();
        cy.intercept(
            'POST', 
            'https://adopet-api-i8qu.onrender.com/adotante/login', 
            {statusCode:400})
        .as('stubPost');
    });

    it('Acessa a página de Login e efetua o login com credenciais válidas', () => {
        cy.env(['email', 'senha']).then((env) => {
            // cy.get('[data-test="login-button"]').click();
            cy.get('[data-test="input-loginEmail"]').type(env.email);
            cy.get('[data-test="input-loginPassword"]').type(env.senha);
            cy.get('[data-test="submit-button"]').click();
        });
    });

    it('Acessa a página de Login e tenta efetuar o login com credenciais inválidas', () => {
        // cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="input-loginEmail"]').type('anainvalido@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha321');
        cy.get('[data-test="submit-button"]').click();
        cy.wait('@stubPost');
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    });

});