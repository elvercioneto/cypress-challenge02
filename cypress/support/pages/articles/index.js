const faker = require('faker')

const el = require('./elements').ELEMENTS

import Routes from '../../routes'

class Articles {

    acessarFormularioDeNovaPublicacao() {
        cy.get(el.linkNovaPublicacao).click()
    }

    preencherFormulario() {
    //Preencher o formulário
    cy.get(el.inputTitle).type('Artigo ' + faker.name.title())
    cy.get(el.inputDescription).type('Cypress')
    cy.get(el.textaAreaContent).type(faker.lorem.paragraph())
    cy.get(el.inputTags).type('cypress');
    }
    submeterPublicacao() {
        //subemter o artigo
        cy.get(el.buttonSubmit).click()
    }
    verificarSeAPublicacaoFoiCriadaComSucesso() {
        //template string - usado para concatenar
        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.response.statusCode).to.eq(200)
        })

        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitle) => {
            expect(getArticlesTitle.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticlesTitleComments) => {
            expect(getArticlesTitleComments.response.statusCode).to.eq(200)
        })
    }
}

export default new Articles();