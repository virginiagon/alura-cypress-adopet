describe('Acessa a lista de pets para adoção', () => {
    it('Verifica se as imagens dos pets estão aparecendo', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.contains('a', 'Ver pets disponíveis para adoção').click();
        cy.get('.cards').should('be.visible');
    });
});