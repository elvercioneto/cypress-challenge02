const faker = require('faker')

const el = require('./elements').ELEMENTS

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
    
    

}
export default new Cadastro();