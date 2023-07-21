import React, { useState } from "react";
import "./Botnavega.css";
import iniciobnt from "../../Imagens/Button Nagivation/inicio.png";
import iniciobntpressed from "../../Imagens/Button Nagivation/inicio_pressed.png";
import empresasbnt from "../../Imagens/Button Nagivation/empresas.png";
import vagasbnt from "../../Imagens/Button Nagivation/vagas.png";
import curriculobnt from "../../Imagens/Button Nagivation/curriculo.png";


function Botnavega({ setPaginaAtiva }) {
    const [botaoAtivo, setBotaoAtivo] = useState(1);

    const handleClick = (pagina) => {
      setBotaoAtivo(pagina);
      setPaginaAtiva(pagina);
    };
    return (
        
            <div className="grupobtns">
                <div className="btn1">
                    <img alt="" src={iniciobnt} className="iconbntnavega"></img>
                    <label>Início</label>
                </div>
                <div className="btn2">
                    <img alt="" src={empresasbnt} className="iconbntnavega"></img>
                    <label>Empresas</label>
                </div>
                <div className="btn3">
                    <img alt=""></img>
                    <label>+</label>
                </div>
                <div className="btn4">
                    <img alt="" src={vagasbnt} className="iconbntnavega"></img>
                    <label>Vagas</label>
                </div>
                <div className="btn5">
                    <img alt="" src={curriculobnt} className="iconbntnavega"></img>
                    <label>Currículo</label>
                </div>

            </div>
        
    );
}

export default Botnavega;