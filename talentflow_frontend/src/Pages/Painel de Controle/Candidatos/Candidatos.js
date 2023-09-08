import React from "react";
import "./Candidatos.css";
import Header from "../../Cabecalho_e_botoesdenavegacao/header";
import Botnavegação from "../../Cabecalho_e_botoesdenavegacao/Botnavega";


function Candidatos () {
return(
    <div className="container">
    <Header className="header" />
    <Botnavegação className="botnavega" />
  </div>
)
}
export default Candidatos;