import Name from "./name/name";

import "./styles.css";
import Evento from "./botao/botao";

const Cadastro = () => {
  console.log("Usuário Cadastrado!");

  return (
    <div className="caixaCadastro">
      <p>
        Cadastre seu Trabalho Acadêmico <Evento click="Listagem" />
      </p>

      <Name
        title="Nome do Trabalho Acadêmico"
        info="Circuitos Elétricos e suas aplicações em segurança"
      />
      <Name title="Autor" />
      <Name title="Orientador" />
      <Name title="Curso" />
      <Name title="Status" />
      <Name title="Palavras-Chave" />
      <Name title="Link do Trabalho Acadêmico" />
      <h6>
        <Evento click="Enviar" />
      </h6>
    </div>
  );
};

export default Cadastro;
