import logo from "./logo.svg";
import "./App.css";
import Listagem from "./components/Listagem.js";
import Cadastro from "./components/cadastro/cadastro.js";

// const styles = {
//   backgroundColor: "#EFF3FA",
//   color #1e1e1e, // Para garantir que o texto seja visível
// };

function App() {
  return (
    // <div className="App" style={styles}>
    <div className="App">
      <Cadastro />
      <Listagem />
    </div>
  );
}

export default App;
