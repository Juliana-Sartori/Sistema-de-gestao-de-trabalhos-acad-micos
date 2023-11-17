import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  container: {
    //fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#c8d5ec',
    color: 'black',
    //margin: 'auto',
    fontFamily: "Poppins",
    //padding: '20px', // Adicione padding para afastar do limite da tela
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    border: '2px solid blue',
    borderRadius: '8px',
    padding: '16px',
    margin: '40px',
    width: '300px',
    height: '450px',
    backgroundColor: '#c8d5ec',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    // fontFamily: 'Arial Black, sans-serif',
    color: 'white',
    // fontSize: '1.5em',
    margin: 'auto',
    paddingLeft: '100px',
    fontSize: '35px',
    backgroundColor: '#404e82',
    width: '211vh',
    fontFamily: "Poppins",
    fontStyle: 'normal',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    //gap: '50vh'
  },
  titleCard: {
    // fontFamily: 'Arial Black, sans-serif',
    fontFamily: "Poppins",
    //color: 'black',
    fontSize: '1.5em',
  },
  text: {
    color: 'black',
  },
  paginacao: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
};

const Filtro = ({ onEnterPressed, onSelectChange }) => {
  const handleKeyDown = (ev) => {
    if (ev.key === 'Enter') {
      onEnterPressed(ev.target.value);
    }
  };

  return (
    <div>
      <div style={{
        textAlign: "center",
        margin: '1px'
      }}>
        <select style={{
          textAlign: "center",
          margin: '10px'
        }} onChange={(ev) => onSelectChange(ev.target.value)}>
          <option value="autor">Autor</option>
          <option value="titulo">Título</option>
          <option value="curso">Curso</option>
          <option value="status">Status</option>
          <option value="orientador">Orientador</option>
          <option value="palavras_chaves">Palavras-Chave</option>
        </select>
        <input
          type="text"
          placeholder="Pressione ENTER para filtrar"
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

function Listagem() {

  const vet = JSON.parse(window.localStorage.getItem('trabalhos'));

  const [filtro, setFiltro] = useState("");
  const [filtroPor, setFiltroPor] = useState("autor");

  const refinofiltrado = vet
    ? vet.filter((item) => {
      const campoFiltrado = item[filtroPor];
      return String(campoFiltrado).toLowerCase().includes(filtro.toLowerCase());
    })
    : [];


  const handleEnterPressed = (valor) => {
    setFiltro(valor);
  };

  const handleSelectChange = (opcao) => {
    setFiltroPor(opcao);
  };

  const ObjetoCard = ({ objeto }) => {
    return (
      <div style={styles.card}>
        <h3 style={styles.titleCard}>{objeto.titulo}</h3>
        <p style={styles.text}>Autor: {objeto.autor}</p>
        <p style={styles.text}>Orientador: {objeto.orientador}</p>
        <p style={styles.text}>Curso: {objeto.curso}</p>
        {/* <p style={styles.text}>Data de Início: {new Date(objeto.periodoDeExecucao.inicio).toLocaleDateString()}</p>
        <p style={styles.text}>Data de Encerramento: {new Date(objeto.periodoDeExecucao.fim).toLocaleDateString()}</p> */}
        <p style={styles.text}>Status: {objeto.status}</p>
        {/* <p style={styles.text}>Tipo: {objeto.tipo}</p> */}
        <p style={styles.text}>Palavras-Chave: {objeto.palavras_chaves.join(', ')}</p>
        <p style={styles.text}> <a href={objeto.conteudo.url} target='_blank'>Link</a></p>
      </div>
    );
  };

  const FiltroComponent = (props) => {
    const { title } = props;
    return (
      <div>
        <h4>{title}</h4>
        <Filtro onEnterPressed={handleEnterPressed} onSelectChange={handleSelectChange} />
      </div>);
  };

  const OverviewTela = ({ arrayDeObjetos, itensPorPagina }) => {
    const [paginaAtual, setPaginaAtual] = useState(1);
    const totalPaginas = Math.ceil(arrayDeObjetos.length / itensPorPagina);

    const handlePaginaClicada = (numeroPagina) => {
      setPaginaAtual(numeroPagina);
    };

    const objetosNaPagina = arrayDeObjetos.slice((paginaAtual - 1) * itensPorPagina, paginaAtual * itensPorPagina);

    const paginacaoItems = [];

    for (let number = 1; number <= totalPaginas; number++) {
      paginacaoItems.push(
        <Pagination.Item key={number} active={number === paginaAtual} onClick={() => handlePaginaClicada(number)}>
          {number}
        </Pagination.Item>,
      );
    }

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Listagem</h1>

        <FiltroComponent title="Filtro" />

        <div className="cards-container" style={styles.cardContainer}>
          {objetosNaPagina.map((objeto, index) => (
            <ObjetoCard key={index} objeto={objeto} />
          ))}
        </div>
        <div style={styles.paginacao}>
          <Pagination>{paginacaoItems}</Pagination>
        </div>
      </div>
    );
  };

  //const arrayDeObjetos = vet;

  const itensPorPagina = 6;

  return (
    <div style={styles.container}>
      <OverviewTela arrayDeObjetos={refinofiltrado} itensPorPagina={itensPorPagina} />
    </div>
  );

}


export default Listagem;