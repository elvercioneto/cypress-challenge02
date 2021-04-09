/// <reference types="cypress" />

const faker = require('faker');
import cadastro from '../support/pages/cadastro';


context('Cadastro', () => {
    it('Cadastrar um novo usuario', () => {
      cadastro.acessarFormularioDeCadastro()
      cadastro.preencherFormulario()
      cadastro.submeterCadastro()
    });
});