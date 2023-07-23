import React, { useState } from "react";
import "./Botnavega.css";
import iniciobnt from "../../Imagens/Button Nagivation/inicio.png";
import iniciobntpressed from "../../Imagens/Button Nagivation/inicio_pressed.png";
import candidatosbnt from "../../Imagens/Button Nagivation/empresas.png";
import vagasbnt from "../../Imagens/Button Nagivation/vagas.png";
import curriculosbnt from "../../Imagens/Button Nagivation/curriculo.png";
import maisbutton from "../../Imagens/Button Nagivation/+ button.png";

function Botnavega({ setPaginaAtiva }) {
    const [botaoAtivo, setBotaoAtivo] = useState(1);

    const handleClick = (pagina) => {
      setBotaoAtivo(pagina);
      setPaginaAtiva(pagina);
    };
    return (
        
            <div className="grupobtns">
                <div className="grupoperfil">
                <div className="btn1">
                    <img alt="" src={iniciobnt} className="iconbntnavega"></img>
                    <label>Início</label>
                </div>
                <div className="btn2">
                    <img alt="" src={candidatosbnt} className="iconbntnavega"></img>
                    <label>Candidatos</label>
                </div>
                <div className="btn3">
                <img alt="" src={maisbutton} className="iconbntnavega"></img>
                </div>
                <div className="btn4">
                    <img alt="" src={vagasbnt} className="iconbntnavega"></img>
                    <label>Vagas</label>
                </div>
                <div className="btn5">
                    <img alt="" src={curriculosbnt} className="iconbntnavega"></img>
                    <label>Currículos</label>
                </div>
                </div>
            </div>
        
    );
}

export default Botnavega;