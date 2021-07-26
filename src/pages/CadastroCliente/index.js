import FormCliente from "./form";
import { useHistory } from "react-router-dom";
import { DivCadastro } from "./styled";
import Footer from "../../components/Footer";
const CadastroCliente = () => {
  const location = useHistory();
  return (
    <div>
        <DivCadastro>
        <h1>Cadastrar Cliente</h1>
    </DivCadastro>
      <FormCliente />
      <Footer />
      </div>
  );
};

export default CadastroCliente;