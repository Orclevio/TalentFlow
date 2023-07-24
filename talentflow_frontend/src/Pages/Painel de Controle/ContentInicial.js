import React from "react";
import "./ContentInicial.css";
import pesquisa from "../../Imagens/header/pesquisa.png";
import pesquisa1 from "../../Imagens/header/pesquisa1.png";

const quantbloco = 8;

  // Função para gerar os blocos dinamicamente
  const criarBlocos = () => {
    const blocos = [];
    for (let i = 0; i < quantbloco; i++) {
      blocos.push(
        <div key={i} className="blococol1">
          <label className="titblocoini">Empresa: pascoa</label>
        </div>
      );
    }
    return blocos;
  };

function ContentInicial() {

    return (
        <div className="conteudoinicial">
             <div className="pesquisahead">
            <button type="submit" className="btnpesquisa" style={{width: "45px"}}>
                <img alt="" style={{width: "20px", backgroundColor:"transparent"}} src={pesquisa1}></img>
                </button>
                <form className="formpesquisa">
                    <input
                        type="text"
                        placeholder="Pesquisa"
                         className="inputpesquisa"
                    />
                </form>
            </div>
            <div style={{ color: 'rgba(0, 0, 0, 0.70)', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 0.60, wordWrap: 'break-word' }}>Status - Últimas Candidaturas</div>
            <div className="blocoini">
            {criarBlocos()}
            </div>
            <div style={{color: 'rgba(0, 0, 0, 0.70)', marginTop:"10px", fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 0.60, wordWrap: 'break-word'}}>Vagas recentes</div>
            <div className="blocoini">
                <div className="blococol5">
                    <label className="titblocoini2">Empresa: xxxxxxxx</label>
                </div>           
            </div>
            <div className="blocovagas"></div>
            <div className="blocoini">
                <div className="blococol5">
                    <label className="titblocoini2">Empresa: xxxxxxxx</label>
                </div>           
            </div>
            <div className="blocoini">
                <div className="blococol5">
                    <label className="titblocoini2">Empresa: xxxxxxxx</label>
                </div>           
            </div>
            <div className="blocoini">
                <div className="blococol5">
                    <label className="titblocoini2">Empresa: xxxxxxxx</label>
                </div>           
            </div>
            <div className="blocoini">
                <div className="blococol5">
                    <label className="titblocoini2">Empresa: xxxxxxxx</label>
                </div>           
            </div>
        </div>
    )
}

export default ContentInicial;