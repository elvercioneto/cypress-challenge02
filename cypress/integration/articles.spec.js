/// <reference types="cypress" />

import articles from '../support/pages/articles'
import Routes from '../support/routes'

context('Publicação', () => {
    //hooks => momentos antes / depois do teste
    //before / beforeEach
    //after / afterEach
    beforeEach(() => {
        //preciso inicializar as rotas antes de cada teste? => não, somente uma vez
        //o que acontece se eu mudar o apelido de uma rota? => Contrato
        cy.backgroundLogin()
        articles.acessarFormularioDeNovaPublicacao()
    });
    it('Criar uma nova publicação', () => {
        articles.preencherFormulario()
        articles.submeterPublicacao()
        articles.verificarSeAPublicacaoFoiCriadaComSucesso()

    });    
});