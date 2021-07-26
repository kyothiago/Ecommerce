import { Link } from "react-router-dom";
import { Header, Nav } from './styled';
const Menu = () => {
  return (
    <Header>
      <Nav>
        <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="/cadastro">
          <a>Cadastro de clientes</a>
        </Link>
        <Link to="/produto">
          <a>Cadastro de produtos</a>
        </Link>
      </Nav>
    </Header>
  );
};

export default Menu;