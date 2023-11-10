import logo from './logo.svg';
import './App.css';
import Listagem from './componentes/Listagem.js';

const styles = {
  backgroundColor: 'black',
  color: 'white',  // Para garantir que o texto seja visível
};

function App() {
  return (
    <div className="App" style={styles}>
      <Listagem />
    </div>
  );
}

export default App;
