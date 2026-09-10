describe('Cadastro de usuário', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    });

    it('Acessa a página de cadastro, preenche o formulário corretamente e realiza cadastro', () => {
        cy.get('[data-test="input-name"]').type('Usuário de Teste');
        cy.get('[data-test="input-email"]').type('usuario@teste.com.br');
        cy.get('[data-test="input-password"]').type('Senha321');
        cy.get('[data-test="input-confirm-password"]').type('Senha321');
        cy.get('[data-test="submit-button"]').click();
    });

    it('Clica no botão Cadastrar sem preencher os campos', () => {
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Crie uma senha').should('be.visible');
        cy.contains('Repita a senha criada acima').should('be.visible');
    });

    it('Digita senha com 5 caracteres', () => {
        cy.get('[data-test="input-name"]').type('Usuário de Teste');
        cy.get('[data-test="input-email"]').type('usuario@teste.com.br');
        cy.get('[data-test="input-password"]').type('Tes12');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    });

    it('Digita senha com 16 caracteres', () => {
        cy.get('[data-test="input-name"]').type('Usuário de Teste');
        cy.get('[data-test="input-email"]').type('usuario@teste.com.br');
        cy.get('[data-test="input-password"]').type('TesteTesteTeste1');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    });

    it('Digita senha com 10 caracteres sem número', () => {
        cy.get('[data-test="input-name"]').type('Usuário de Teste');
        cy.get('[data-test="input-email"]').type('usuario@teste.com.br');
        cy.get('[data-test="input-password"]').type('TesteTeste');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    });
    
    it('Digita senha com 5 letras todas minúsculas e com número', () => {
        cy.get('[data-test="input-name"]').type('Usuário de Teste');
        cy.get('[data-test="input-email"]').type('usuario@teste.com.br');
        cy.get('[data-test="input-password"]').type('teste1');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    });
});