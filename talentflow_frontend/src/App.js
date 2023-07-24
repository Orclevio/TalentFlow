import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Autenticação/Login/Login";
import Dashboard from './Pages/Painel de Controle/Dashboard';
import Candidatos from './Pages/Painel de Controle/Candidatos/Candidatos';
import Vagas from './Pages/Painel de Controle/Vagas/Vagas';
import Curriculos from './Pages/Painel de Controle/Relatórios_e_Análises/Relatorios_e_Análises';

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Candidatos" element={<Candidatos/>} />
      <Route path="/Vagas" element={<Vagas/>} />
      <Route path="/Curriculos" element={<Curriculos/>} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
