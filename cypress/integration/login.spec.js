/// <reference types="cypress" />

import login from '../support/pages/login'

context('Login',  () => {
    it('Realizar login com sucesso', () => {
       login.acessarLogin()
       login.preencherFormulario()
       login.submeterFormulario()

       //verificação
        //{browser: '!firefox'} usado quando nao quero rodar em determinado browser
    });
});