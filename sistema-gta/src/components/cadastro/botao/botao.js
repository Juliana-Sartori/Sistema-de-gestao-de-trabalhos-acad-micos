import "./styles.css";

const Evento = (props) => {
  const meuEvento = () => {
    console.log("ativado");
  };
  const { click } = props;
  return (
    <div className="botao">
      <button onClick={meuEvento}>{click}</button>
    </div>
  );
};

export default Evento;
