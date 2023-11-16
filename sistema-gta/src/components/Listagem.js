import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

const vet = [
  {
    autor: "Fulano de Tal",
    orientador: "Professor de tal Matéria",
    titulo: "Uma Coisa Muito Chata",
    periodoDeExecucao: {
      inicio: new Date(2022, 0, 1),
      fim: new Date(2022, 6, 30),
    },
    palavras_chaves: ["palavra 1", "palavra 2", "palavra 3"],
    curso: "Um Curso Aí",
    tipo: "Monografia",
    status: "Concluído",
    conteudo: {
      url: "https://www.google.com/",
    },
  },
  {
    autor: "Beltrano de Tal",
    orientador: "Professora de Outra Matéria",
    titulo: "Uma Coisa Interessante",
    periodoDeExecucao: {
      inicio: new Date(2022, 7, 1),
      fim: new Date(2022, 11, 31),
    },
    palavras_chaves: ["palavra 4", "palavra 5", "palavra 6"],
    curso: "Outro Curso Legal",
    tipo: "Tese",
    status: "Em Progresso",
    conteudo: {
      url: "https://github.com/",
    },
  },
  {
    autor: "Ciclano de Tal",
    orientador: "Professor de Ciências",
    titulo: "Descobertas Científicas",
    periodoDeExecucao: {
      inicio: new Date(2022, 2, 15),
      fim: new Date(2022, 8, 30),
    },
    palavras_chaves: ["descoberta", "ciência", "inovação"],
    curso: "Ciências Naturais",
    tipo: "Pesquisa",
    status: "Em Andamento",
    conteudo: {
      url: "https://www.nature.com/",
    },
  },
  {
    autor: "José Silva",
    orientador: "Professora de História",
    titulo: "História Contemporânea",
    periodoDeExecucao: {
      inicio: new Date(2022, 4, 1),
      fim: new Date(2022, 11, 31),
    },
    palavras_chaves: ["história", "contemporânea", "sociedade"],
    curso: "História",
    tipo: "Monografia",
    status: "Em Revisão",
    conteudo: {
      url: "https://www.history.com/",
    },
  },
  {
    autor: "Maria Oliveira",
    orientador: "Professor de Economia",
    titulo: "Economia Sustentável",
    periodoDeExecucao: {
      inicio: new Date(2022, 2, 1),
      fim: new Date(2022, 8, 31),
    },
    palavras_chaves: ["economia", "sustentabilidade", "desenvolvimento"],
    curso: "Economia",
    tipo: "Tese",
    status: "Concluído",
    conteudo: {
      url: "https://www.weforum.org/",
    },
  },
  {
    autor: "Ana Souza",
    orientador: "Professora de Literatura",
    titulo: "Análise Literária",
    periodoDeExecucao: {
      inicio: new Date(2022, 1, 1),
      fim: new Date(2022, 6, 30),
    },
    palavras_chaves: ["literatura", "análise", "escritores"],
    curso: "Letras",
    tipo: "Monografia",
    status: "Em Andamento",
    conteudo: {
      url: "https://www.poetryfoundation.org/",
    },
  },
  {
    autor: "Carlos Mendes",
    orientador: "Professor de Matemática",
    titulo: "Teoria dos Números",
    periodoDeExecucao: {
      inicio: new Date(2022, 3, 1),
      fim: new Date(2022, 9, 30),
    },
    palavras_chaves: ["matemática", "teoria dos números", "números primos"],
    curso: "Matemática",
    tipo: "Pesquisa",
    status: "Em Progresso",
    conteudo: {
      url: "https://www.ams.org/",
    },
  },
  {
    autor: "Rafael Lima",
    orientador: "Professora de Informática",
    titulo: "Desenvolvimento Web Moderno",
    periodoDeExecucao: {
      inicio: new Date(2022, 5, 1),
      fim: new Date(2022, 11, 31),
    },
    palavras_chaves: ["desenvolvimento web", "front-end", "back-end"],
    curso: "Ciência da Computação",
    tipo: "Projeto",
    status: "Em Desenvolvimento",
    conteudo: {
      url: "https://developer.mozilla.org/",
    },
  },
  {
    autor: "Juliana Oliveira",
    orientador: "Professor de Biologia",
    titulo: "Impacto Ambiental",
    periodoDeExecucao: {
      inicio: new Date(2022, 2, 1),
      fim: new Date(2022, 8, 31),
    },
    palavras_chaves: ["biologia", "meio ambiente", "sustentabilidade"],
    curso: "Biologia",
    tipo: "Tese",
    status: "Concluído",
    conteudo: {
      url: "https://www.worldwildlife.org/",
    },
  },
  {
    autor: "Luiz Santos",
    orientador: "Professora de Química",
    titulo: "Avanços em Química Orgânica",
    periodoDeExecucao: {
      inicio: new Date(2022, 1, 1),
      fim: new Date(2022, 7, 31),
    },
    palavras_chaves: ["química orgânica", "avanços", "pesquisa"],
    curso: "Química",
    tipo: "Monografia",
    status: "Em Revisão",
    conteudo: {
      url: "https://pubs.acs.org/journal/joceah",
    },
  }, {
    autor: "Juliana Oliveira",
    orientador: "Professor de Biologia",
    titulo: "Impacto Ambiental",
    periodoDeExecucao: {
      inicio: new Date(2022, 2, 1),
      fim: new Date(2022, 8, 31),
    },
    palavras_chaves: ["biologia", "meio ambiente", "sustentabilidade"],
    curso: "Biologia",
    tipo: "Tese",
    status: "Concluído",
    conteudo: {
      url: "https://www.worldwildlife.org/",
    },
  },
  {
    autor: "Luiz Santos",
    orientador: "Professora de Química",
    titulo: "Avanços em Química Orgânica",
    periodoDeExecucao: {
      inicio: new Date(2022, 1, 1),
      fim: new Date(2022, 7, 31),
    },
    palavras_chaves: ["química orgânica", "avanços", "pesquisa"],
    curso: "Química",
    tipo: "Monografia",
    status: "Em Revisão",
    conteudo: {
      url: "https://pubs.acs.org/journal/joceah",
    },
  },
  // Adicione mais elementos conforme necessário...
];

const ObjetoCard = ({ objeto }) => {
  return (
    <div className="card" style={styles.card}>
      <h3 style={styles.titleCard}>{objeto.titulo}</h3>
      <p style={styles.text}>Autor: {objeto.autor}</p>
      <p style={styles.text}>Orientador: {objeto.orientador}</p>
      <p style={styles.text}>Curso: {objeto.curso}</p>
      <p style={styles.text}>Status: {objeto.status}</p>
      <p style={styles.text}>Palavras-Chave: {objeto.palavras_chaves.join(', ')}</p>
      <p style={styles.text}> <a href={objeto.conteudo.url} target='_blank'>Link</a></p>
    </div>
  );
};

const OverviewTela = ({ arrayDeObjetos, itensPorPagina }) => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const totalPaginas = Math.ceil(arrayDeObjetos.length / itensPorPagina);

  const handlePaginaClicada = (numeroPagina) => {
    setPaginaAtual(numeroPagina);
  };

  const objetosNaPagina = arrayDeObjetos.slice((paginaAtual - 1) * itensPorPagina, paginaAtual * itensPorPagina);

  const paginationItems = [];
  for (let number = 1; number <= totalPaginas; number++) {
    paginationItems.push(
      <Pagination.Item key={number} active={number === paginaAtual} onClick={() => handlePaginaClicada(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div className="container" style={styles.container}>
      <h1 style={styles.title}>Visão Geral</h1>
      <div className="cards-container" style={styles.cardContainer}>
        {objetosNaPagina.map((objeto, index) => (
          <ObjetoCard key={index} objeto={objeto} />
        ))}
      </div>
      <div style={styles.paginacao}>
        <Pagination>{paginationItems}</Pagination>
      </div>
    </div>
  );
};

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
    margin: '16px',
    width: '300px',
    height: '400px',
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
    gap: '50vh'
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

function Listagem() {

  const arrayDeObjetos = vet;

  const itensPorPagina = 6;

  return (
    <div>
      <OverviewTela arrayDeObjetos={arrayDeObjetos} itensPorPagina={itensPorPagina} />
    </div>
  );

}


export default Listagem;