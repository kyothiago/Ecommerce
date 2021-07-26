import { useCallback, useEffect, useState } from "react";
import { Container } from "./styled";
import { useHistory } from "react-router-dom";

const FormCliente = () => {
  const [sex, setSex] = useState("");
  const [name, setName] = useState("");
  const [email, setEamil] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const location = useHistory();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      let cliente = {
        email: email,
        name: name,
        telefone: telefone,
        sex: sex,
        endereco: endereco,
      };
      const str = JSON.stringify(cliente);
      localStorage.setItem("cliente", str);
      alert("cliente cadastrado!");
      location.push("/");
    },
    [email, endereco, name, sex, telefone]
  );

  useEffect(() => {
  }, [ handleSubmit]);
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nome:</label>
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <label htmlFor="">E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={({ target }) => setEamil(target.value)}
        />
        <label htmlFor="">Telefone:</label>
        <input
          type="text"
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
        />
        <label htmlFor="">Endereço:</label>
        <input
          type="text"
          value={endereco}
          onChange={({ target }) => setEndereco(target.value)}
        />
        <label htmlFor="select">Sexo:</label>
        <select id="select" onChange={({ target }) => setSex(target.value)}>
          <option selected>Selecione o sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outros">Outros</option>
        </select>
        <button type="submit">Cadastrar</button>
        <button onClick={() => location.push("/")} type="button">
          Voltar
        </button>
      </form>
    </Container>
  );
};

export default FormCliente;
