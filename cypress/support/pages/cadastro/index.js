const faker = require('faker')

const el = require('./elements').ELEMENTS

import Routes from '../../routes'

class Cadastro {

    acessarFormularioDeCadastro() {
        cy.visit('register')
    }
    preencherFormulario() {
        cy.get(el.inputUserName).type(faker.name.firstName() + faker.name.lastName());
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type('12345678');
    }
    submeterCadastro(){
        cy.get(el.buttonSubmit).click();
    }
    verificarSeOCadastroFoiCriadoComSucesso() {
        cy.wait(`@${Routes.as.postUsers}`).then((postUsersResponse) => {
            expect(postUsersResponse.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.as.getTags}`).then((getTagsResponse) => {
            expect(getTagsResponse.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.as.getFeed}`).then((getFeedResponse) => {
            expect(getFeedResponse.response.statusCode).to.eq(200)
        })
    }
    
    

}
export default new Cadastro();