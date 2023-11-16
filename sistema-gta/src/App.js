import logo from "./logo.svg";
import "./App.css";
import Listagem from "./components/listagem/Listagem.js";
import Cadastro from "./components/cadastro/cadastro.js";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function App() {
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
