import Name from "./name/name";

import "./styles.css";
import Evento from "./botao/botao";
import { useState } from "react";

const Cadastro = () => {
  console.log("Usuário Cadastrado!");

  const [nome, setNome] = useState("");
  const [autor, setAutor] = useState("");
  const [orientador, setOrientador] = useState("");
  const [curso, setCurso] = useState("")
  const [status, setStatus] = useState("")
  const [palavrasChaves, setPalavrasChaves] = useState("")
  const [link, setLink] = useState("")

  const onEviar = (event) => {
    event.preventDefault();

    const novoTrabalho = {
      autor,
      orientador,
      titulo: nome,
      palavras_chaves: palavrasChaves.split(','),
      curso,
      status,
      conteudo: {
        url: link
      }
    }

    const trabalhos = JSON.parse(window.localStorage.getItem('trabalhos'))
    trabalhos.push(novoTrabalho)

    window.localStorage.setItem('trabalhos', JSON.stringify(trabalhos))
    window.alert('Trabalho cadastrado com sucesso!!')
    limparFormulario()
  }

  const limparFormulario = () => {
    setNome('')
    setAutor('')
    setCurso('')
    setLink('')
    setOrientador('')
    setPalavrasChaves('')
    setStatus('')
  }

  return (
    <div className="caixaCadastro">
      <p>
        Cadastre seu Trabalho Acadêmico <Evento click="Listagem" />
      </p>

      {/* <Name
        title="Nome do Trabalho Acadêmico"
        info="Circuitos Elétricos e suas aplicações em segurança"
      />
      <Name title="Autor" />
      <Name title="Orientador" />
      <Name title="Curso" />
      <Name title="Status" />
      <Name title="Palavras-Chave" />
      <Name title="Link do Trabalho Acadêmico" /> */}
      {/* <h6>
        <Evento click="Enviar" />
      </h6> */}

      <form onSubmit={onEviar}>
        <div className="dado">
          <h3>Nome do Trabalho Acadêmico</h3>
          <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
        </div>

        <div className="dado">
          <h3>Autor</h3>
          <input type="text" value={autor} onChange={(event) => setAutor(event.target.value)} />
        </div>

        <div className="dado">
          <h3>Orientador</h3>
          <input type="text" value={orientador} onChange={(event) => setOrientador(event.target.value)} />
        </div>

        <div className="dado">
          <h3>Curso</h3>
          <input type="text" value={curso} onChange={(event) => setCurso(event.target.value)} />
        </div>

        <div className="dado">
          <h3>Status</h3>
          <input type="text" value={status} onChange={(event) => setStatus(event.target.value)} />
        </div>

        <div className="dado">
          <h3>Palavras-Chave</h3>
          <input type="text" value={palavrasChaves} onChange={(event) => setPalavrasChaves(event.target.value)} />
        </div>

        <div className="dado">
          <h3>Link do Trabalho Acadêmico</h3>
          <input type="text" value={link} onChange={(event) => setLink(event.target.value)} />
        </div>
        
        <h6>
          <button type="submit">Enviar</button>
        </h6>
      </form>
    </div>

  );
};

export default Cadastro;
