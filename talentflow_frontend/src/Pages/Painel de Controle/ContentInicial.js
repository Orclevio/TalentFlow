import React from "react";
import "./ContentInicial.css";


let pagativa = 1;

function ContentInicial() {

    return (
        <div className="conteudoinicial">
            <div style={{ color: 'rgba(0, 0, 0, 0.70)', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 0.60, wordWrap: 'break-word' }}>Status - Últimas Candidaturas</div>
            <div className="blocoini">
                <div className="blococol1">
                    <label className="titblocoini">Empresa: xxxxxxxx</label>
                </div>
                <div className="blococol2">
                    <div className="blococol3">
                        <label className="titblocoini">Empresa: xxxxxxxx</label>
                    </div>
                    <div className="blococol4">
                        <label className="titblocoini">Empresa: xxxxxxxx</label>
                    </div>
                </div>
            </div>
            <div style={{color: 'rgba(0, 0, 0, 0.70)', marginTop:"10px", fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 0.60, wordWrap: 'break-word'}}>Vagas recentes</div>
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