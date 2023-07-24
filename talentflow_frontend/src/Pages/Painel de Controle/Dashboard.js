import React from "react";
import "./Dashboard.css";
import Header from "../Cabecalho_e_botoesdenavegacao/header";
import Botnavegação from "../Cabecalho_e_botoesdenavegacao/Botnavega";
import ContentInicial from "./ContentInicial";


import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="container">
      <Header className="header" />
      <ContentInicial className="content" />
      <Botnavegação className="botnavega" />
    </div>
  );
}

export default Dashboard;
