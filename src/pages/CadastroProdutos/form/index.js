import { useState } from "react";
import { Container } from "./styled";
import {useHistory} from "react-router-dom"
import Footer from "../../../components/Footer";

const FormProduto = () => {
  const [produtoName, setProdutoName] = useState("");
  const [codigo, setCodigo] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [descricao, setDescricao] = useState("");
  const location = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    let produto = {
      produtoName: produtoName,
      codigo: codigo,
      quantidade: quantidade,
      descricao: descricao,
    };
    const str = JSON.stringify(produto);
    localStorage.setItem('produto', str);
  alert("Produto Cadastrado com Sucesso!")
    location.push("/")
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nome:</label>
        <input
          type="text"
          value={produtoName}
          onChange={({ target }) => setProdutoName(target.value)}
        />
        <label htmlFor="">Codigo:</label>
        <input
          type="number"
          value={codigo}
          onChange={({ target }) => setCodigo(target.value)}
        />
        <label htmlFor="">Quantidade:</label>
        <input
          type="number"
          value={quantidade}
          onChange={({ target }) => setQuantidade(target.value)}
        />
        <label htmlFor="">Descrição:</label>
        <input
          type="text"
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
        />
        <ul></ul>
        <button type="submit">Cadastrar</button>
        <button onClick={() => location.push("/")} type="button">
          Voltar
        </button>
      </form>
    </Container>
  );
};

export default FormProduto;
