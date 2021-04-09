const faker = require('faker')

const el = require('./elements').ELEMENTS

import Routes from '../../routes'

class Login {
    acessarLogin(){
        //acessar a pagina de login
        cy.visit('login') ;
    }
    preencherFormulario(){
        //preencher o formulario
        cy.get(el.inputEmail).type(Cypress.config().user.email)
        cy.get(el.inputPassword).type('12345678');
    }
    submeterFormulario(){
        //submeter o formulario
        cy.get(el.buttonSubmit).click();
    }
    verificarSeUsuarioEstaLogado() {
        cy.wait(`@${Routes.as.postLogin}`).then((postLoginResponse) => {
            expect(postLoginResponse.response.statusCode).to.eq(200)
        })

        cy.wait(`@${Routes.as.getFeed}`).then((getFeedResponse) => {
            expect(getFeedResponse.response.statusCode).to.eq(200)
        })
        
    }
}
export default new Login();