import React from 'react';
import FormProduto from "./form";
import { useHistory } from "react-router-dom";
import { DivCadastro } from '../CadastroProdutos/styled';
import Footer from '../../components/Footer';

const CadastroProdutos = () => {
  const location = useHistory();
  return (
    <>
      <div>
        <DivCadastro>
        <h1>Cadastrar Produto</h1>
        </DivCadastro>
      </div>
      <FormProduto />
      <Footer />
    </>
  );
};
export default CadastroProdutos;