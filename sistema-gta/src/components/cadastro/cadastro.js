import Name from "./name/name";
import "./styles.css";

const Cadastro = () => {
return (<div className = "caixaCadastro"> Cadastre seu TCC
<Name
    title = "Nome do TCC"
    info = "Circuitos Elétricos e suas aplicações em segurança"
/>
<Name
    title = "Autor"
    info = "Juliana Sartori"
/>
<Name
    title = "Orientador"
    info = "Elder"
/>
<Name
    title = "Curso"
    info = "Engenharia da Computação"
/>
<Name
    title = "Status"
    info = "Em andamento"
/>
<Name
    title = "Palavras-Chave"
    info = "circuitos eletricos, física"
/>
<Name
    title = "Link do TCC"
/>
<a href="https://www2.ufjf.br/mecanica//files/2016/07/UFJF_2017_-TCC_Eduardo-Rezende-Pires.pdf" >
        Link
      </a>
</div>);
};


export default Cadastro;