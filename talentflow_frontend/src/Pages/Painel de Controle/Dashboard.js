import React from "react";
import Header from '../Cabecalho_e_botoesdenavegacao/header';
import Botnavegação from "../Cabecalho_e_botoesdenavegacao/Botnavega";
import ContentInicial from "./ContentInicial";
import Candidatos from "./Candidatos/Candidatos";
import Vagas from "./Vagas/Vagas";
import Relatorios_e_Analises from "./Relatórios_e_Análises/Relatorios_e_Análises";

import "./Dashboard.css";

let paginabtn = 1;

function Dashboard() {
  return (
    <div className="container">
      <Header className="header" />
      {paginabtn === 1 && <ContentInicial className="content" />}
      {paginabtn === 2 && <Candidatos className="content" />}
      {paginabtn === 3 && <Vagas className="content" />}
      {paginabtn === 4 && <Relatorios_e_Analises className="content" />}
      <Botnavegação className="botnavega" />
    </div>
  );
}

export default Dashboard;