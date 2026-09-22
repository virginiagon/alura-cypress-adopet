describe('Api Adopet', () => {

    it('Lista de mensagens da API ', () => {
        cy.env(['authorization']).then(({authorization}) => {
            cy.log(authorization);
            cy.request({
                method: 'GET',
                url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
                headers: { 'Accept-Language': 'en-us', authorization },
            }).then((res) => {
                expect(res.status).to.be.equals(200);
                expect(res.body).is.not.empty;
                expect(res.body).to.have.property('msg');
            });
        })
    });
    
})