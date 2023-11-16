import "./styles.css";
import { useNavigate } from "react-router-dom";


const Evento = (props) => {
  const { click } = props;
  const navigate = useNavigate()
  
  const meuEvento = () => {
    if (click == "Listagem") {
      
      navigate("/listagem")
    }
  };
  
  return (
    <div className="botao">
      <button onClick={meuEvento}>{click}</button>
    </div>
  );
};

export default Evento;
