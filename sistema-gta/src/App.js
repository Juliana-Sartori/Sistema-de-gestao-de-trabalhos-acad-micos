import logo from './logo.svg';
import './App.css';
import Listagem from './components/Listagem.js';
import Cadastro from './components/cadastro/cadastro.js'

const styles = {
  backgroundColor: 'black',
  color: 'white',  // Para garantir que o texto seja visível
};

function App() {
  return (
    <div className="App" style={styles}>
      <Cadastro />
      {/* <Listagem /> */}
    </div>
  );
}

export default App;
