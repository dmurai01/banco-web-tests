describe('Transferências', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    });

    it('Deve transferir quando informo dados e valor válidos', () => {
        cy.realizarTransferencia('Maria', 'João', '11')
        cy.verificarMensagemNoToast('Transferência realizada!')
    });

    it('Deve apresentar erro quando tentar transferir valor maior que 5 mil sem o token', () => {
        cy.realizarTransferencia('Maria', 'João', '6000')
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    });
});