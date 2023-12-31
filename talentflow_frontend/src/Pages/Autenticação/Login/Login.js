import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import img1 from "../../../Imagens/imglogin.png";
import img2 from "../../../Imagens/logogoogle.png";
import img3 from "../../../Imagens/logoapple.png";
import Dashboard from "../../Painel de Controle/Dashboard";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };
  async function Autentica() {
    try {
      console.log("Enviando requisição para autenticação...");
      const response = await axios.post("http://172.20.10.4:3001/auth", {
        email,
        password,
      });

      console.log("Resposta do servidor:", response);
      const token = response.data.token;
      setIsLoading(true);
      // Salvar o token no localStorage ou em um estado global (por exemplo, usando Redux)
      localStorage.setItem("token", token);
      setTimeout(() => {
        setIsLoading(true);
        window.location.href = "/Dashboard";
      }, 1000);
    } catch (error) {
      console.error("Erro ao autenticar:", error.response.data.error);
      // Tratar erros de autenticação, se necessário
    }
  }

  return (
    <div className="login">
      <div className="LoginD">
        <div className="image-container">
          <img
            src={img1}
            alt="Imagem de exemplo"
            style={{ width: "100%", userSelect: "none" }}
          />
        </div>
        <form onSubmit={handleLogin}>
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              alignItems: "center",
            }}
          >
            <button className="textogea">
              <img
                style={{
                  width: 35,
                  height: 35,
                  marginLeft: 5,
                  padding: "2px 2px",
                }}
                alt=""
                src={img2}
              />
              Login com Google
            </button>
            <button className="textogea2">
              <img
                style={{
                  width: 35,
                  height: 35,
                  marginLeft: 5,
                  padding: "2px 5px",
                }}
                alt=""
                src={img3}
              />
              Login com Apple
            </button>
          </div>

          <div
            style={{
              textAlign: "center",
              color: "#023047",
              fontSize: 18,
              fontFamily: "Roboto",
              fontWeight: "400",
              wordWrap: "break-word",
              marginTop: "20px",
            }}
          >
            ou
          </div>
          <div>
            <div
              style={{
                color: "#023047",
                fontSize: 20,
                fontFamily: "Roboto",
                fontWeight: "600",
                wordWrap: "break-word",
                textAlign: "left",
                marginTop: "10px",
              }}
            >
              Usuário:
            </div>

            <input
              type="text"
              id="username"
              name="username"
              className="input-field"
              placeholder="Entre com o nome de usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "95%",
                height: 50,
                color: "rgba(215, 241, 254, 0.50)",
                fontSize: 18,
                fontFamily: "Roboto",
                fontWeight: "400",
                marginTop: "10px",
                wordWrap: "break-word",
                background: "#023047",
                borderRadius: 10,
                border: "1px #011A28 solid",
                padding: "0 10px",
              }}
            ></input>
          </div>
          <div>
            <div
              style={{
                color: "#023047",
                fontSize: 20,
                fontFamily: "Roboto",
                fontWeight: "600",
                wordWrap: "break-word",
                textAlign: "left",
                marginTop: "20px",
              }}
            >
              Senha:
            </div>

            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entre com sua senha"
              style={{
                width: "95%",
                height: 50,
                marginTop: "10px",
                color: "rgba(215, 241, 254, 0.50)",
                fontSize: 18,
                fontFamily: "Roboto",
                fontWeight: "400",
                wordWrap: "break-word",
                background: "#023047",
                borderRadius: 10,
                border: "1px #011A28 solid",
                padding: "0 10px",
              }}
            />
          </div>
          <p style={{ fontSize: 14 }}>
            Esqueceu sua senha? <a href="/esqueci-senha">Recuperar Senha</a>
          </p>
          {isLoading && (
            <>
              <div className="loading-bar">
                <div className="loading-bar-fill" />
              </div>
              <p>Efetuando Login...</p>
            </>
          )}
          <button onClick={Autentica} className="buttonenv">
            ENTRAR
          </button>
        </form>
        <button
          className="buttonenv"
          style={{
            backgroundColor: "transparent",
            color: "rgba(228, 124, 6, 0.8)",
            border: "none",
          }}
        >
          Inscreva-se
        </button>
      </div>
    </div>
  );
}

export default Login;
