/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro'
import Routes from '../support/routes'

context('Cadastro', () => {
    it('Cadastrar um novo usuario', () => {
      cadastro.acessarFormularioDeCadastro()
      cadastro.preencherFormulario()
      cadastro.submeterCadastro()
      cadastro.verificarSeOCadastroFoiCriadoComSucesso()
    });
});