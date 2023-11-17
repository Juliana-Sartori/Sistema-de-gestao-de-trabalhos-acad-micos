import logo from "./logo.svg";
import "./App.css";
import Listagem from "./components/listagem/Listagem.js";
import Cadastro from "./components/cadastro/cadastro.js";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Trabalhos } from "./data.js";

function App() {
  window.localStorage.setItem('trabalhos', JSON.stringify(Trabalhos))

  return (
    // <div className="App" style={styles}>
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={<Cadastro />}></Route>
            <Route path='/listagem' element={<Listagem />}></Route>
          </Routes>
        </div>
      </BrowserRouter>


    </div>
  );
}

export default App;
