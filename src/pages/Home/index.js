import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import { Content } from './styled';

const Home = () => {
    const [ClientValue, setClientValue] = React.useState({});
  
    const [ProdutoValue, setProdutoValue] = React.useState({});
  
    const getLocalClient = () => {
      let client = localStorage.getItem("cliente");
      let objClient = JSON.parse(client);
      setClientValue(objClient);
    };
    const getLocalProduto = () => {
      let produto = localStorage.getItem("produto");
      let objProduto = JSON.parse(produto);
      setProdutoValue(objProduto);
    };
    React.useEffect(() => {
      getLocalClient();
      getLocalProduto();
    }, []);
    return (
      <div>
        <Menu />
        <Content>
          <div>
            <h2>Clientes Cadastrados</h2>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Telefone</th>
                  <th>Endereço</th>
                  <th>Sexo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{ClientValue?.name ? ClientValue?.name : ""}</td>
                  <td>{ClientValue?.email ? ClientValue?.email : ""}</td>
                  <td>{ClientValue?.telefone ? ClientValue?.telefone : ""}</td>
                  <td>{ClientValue?.endereco ? ClientValue?.endereco : ""}</td>
                  <td>{ClientValue?.sex ? ClientValue?.sex : ""}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2>Produtos Cadastrados</h2>
            <table>
              <thead>
                <tr>
                  <th>Codigo</th>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Quantidade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {ProdutoValue?.codigo ? ProdutoValue?.codigo : ""}
                    </td>
                  <td>
                    {ProdutoValue?.produtoName ? ProdutoValue?.produtoName : ""}
                  </td>
                  <td>
                    {ProdutoValue?.descricao ? ProdutoValue?.descricao : ""}</td>
                  <td>
                    {ProdutoValue?.quantidade ? ProdutoValue?.quantidade : ""}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </Content>
          <Footer />
      </div>
    );
  };

  
  export default Home;