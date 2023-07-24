import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import "./Botnavega.css";
import iniciobnt from "../../Imagens/Button Nagivation/inicio.png";
import iniciobntpressed from "../../Imagens/Button Nagivation/inicio_pressed.png";
import candidatosbnt from "../../Imagens/Button Nagivation/empresas.png";
import vagasbnt from "../../Imagens/Button Nagivation/vagas.png";
import curriculosbnt from "../../Imagens/Button Nagivation/curriculo.png";
import maisbutton from "../../Imagens/Button Nagivation/+ button.png";
import hamb from '../../Imagens/Button Nagivation/hamb.png';


function Botnavega() {
    const [menuVisivel, setMenuVisivel] = useState(false);
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(false);

    const checkIsMobile = () => {
        const isMobile = window.innerWidth <= 768;
        setIsMobile(isMobile);
    };

    useEffect(() => {
        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);
    const toggleMenu = () => {
        setMenuVisivel(!menuVisivel);
    };



    return (
        <>
            {isMobile && (
                <>
                    <div className="bottom-navigation" >
                        <Link to="/Dashboard" className={`menu-button ${location.pathname === '/Inicio' ? 'active' : ''}`}>
                            <img src={iniciobnt} alt="Descrição da imagem" />
                        </Link>

                        <Link to="/Candidatos" className={`menu-button ${location.pathname === '/Formularios' ? 'active' : ''}`}>
                            <img src={candidatosbnt} alt="Descrição da imagem" />
                        </Link>
                        <Link to="/Candidatos" className={`menu-button ${location.pathname === '/Formularios' ? 'active' : ''}`}>
                            <img src={maisbutton} alt="Descrição da imagem" />
                        </Link>
                        <Link to="/Vagas" className={`menu-button ${location.pathname === '/Financeiro' ? 'active' : ''}`}>
                            <img src={vagasbnt} alt="Descrição da imagem" />

                        </Link>

                        <Link to="/Curriculos" className={`menu-button ${location.pathname === '/Curriculos' ? 'active' : ''}`}>
                            <img src={curriculosbnt} alt="Descrição da imagem" />

                        </Link>
                    </div>
                </>
            )
            }
            {!isMobile && (
                <>
                    <div className={`menu-lateral ${menuVisivel ? 'visivel' : 'oculto'}`}>
                        <button className="toggle-button" onClick={toggleMenu}>
                            <img src={hamb} alt="Descrição da imagem" className='imgHamb' />
                        </button>
                        <h1 className="sidebar-title">TalentFlow</h1>

                        <Link to="/Dashboard" className={`menu-button ${location.pathname === '/Dashboard' ? 'active' : ''}`}>
                            <img src={iniciobnt} alt="Descrição da imagem" style={{ maxWidth: '15%', verticalAlign: 'middle' }} />Dashboard
                        </Link>

                        <Link to="/Candidatos" className={`menu-button ${location.pathname === '/Candidatos' ? 'active' : ''}`}>
                            <img src={candidatosbnt} alt="Descrição da imagem" style={{ maxWidth: '15%', verticalAlign: 'middle' }} />Candidatos
                        </Link>

                        <Link to="/Vagas" className={`menu-button ${location.pathname === '/Vagas' ? 'active' : ''}`}>
                            <img src={vagasbnt} alt="Descrição da imagem" style={{ maxWidth: '15%', verticalAlign: 'middle' }} />Vagas
                        </Link>

                        <Link to="/Curriculos" className={`menu-button ${location.pathname === '/Curriculos' ? 'active' : ''}`}>
                            <img src={curriculosbnt} alt="Descrição da imagem" style={{ maxWidth: '15%', verticalAlign: 'middle' }} />Curriculos
                        </Link>
                    </div>
                </>
            )}
        </>
    );
};

export default Botnavega;