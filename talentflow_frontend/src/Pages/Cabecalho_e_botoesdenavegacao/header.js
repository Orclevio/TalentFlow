import React from "react";
import "./header.css";
import img1 from "../../Imagens/header/perfil.png";
import notificaimg from "../../Imagens/header/notifica.png";
import configuraimg from "../../Imagens/header/configura.png";


function header() {

    return (
        <div className="grupoprinchead">
            <div className="headercont">

                <div className="grupoperfil">
                    <button className='Botaoperfil'>
                        <img alt="" src={img1}></img>
                    </button>
                    <div className="titulosheader">

                        <div style={{ color: 'rgba(0, 0, 0, 0.50)', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 0.72, wordWrap: 'break-word' }}>Bom dia</div>
                        <div style={{ color: '#023047', fontSize: 24, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 0.96, wordWrap: 'break-word' }}>Candidato</div>

                    </div>
                </div>

                <div className="grupoalertaseconfig">
                    <div className="gruponotificacoes">
                        <button className='Botaonotificações'>
                            <img alt="" src={notificaimg}></img>
                        </button>
                        <label className="numnotific">2</label>
                    </div>
                    <button className='BotaoConfiguracoes'>
                        <img alt="" src={configuraimg}></img>
                    </button>

                </div>
            </div>
           
        </div>
    )
}

export default header;