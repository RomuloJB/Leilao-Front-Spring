import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Calculadora from './pages/calculadora/Calculadora';
import Home from './pages/home/Home';
import NovoCadastro from './pages/novoCadastro/novoCadastro';
import RecuperarSenha from './pages/recuperarSenha/recuperarSenha';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/tarefa/Cadastro';
/* import Login from './pages/login/Login'; */

function App() {
  return (
    <>
      <Header nome="Romulo" />
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' Component={() => <Login />} /> */}
          {/* <Route path='/home' Component={Home} /> */}
          <Route path='/' Component={() => <Home />} />
          <Route path='/novoCadastro' Component={() => <NovoCadastro />} />
          <Route path='/recuperarSenha' Component={() => <RecuperarSenha />} />
          <Route path='/calculadora' Component={Calculadora} />
          <Route path='/cadastro' Component={Cadastro} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
