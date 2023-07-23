const express = require('express');
const app = express();
const PORT = 3001;
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors'); 

app.use(cors()); 




const connection = mysql.createConnection({
  host: '192.168.0.23',
  user: 'root',
  password: '1410',
  database: 'talentflow' 
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados');
  }
});

// Middleware para processar o corpo das requisições (application/json)
app.use(bodyParser.json());

// Rota de autenticação
app.post('/auth', (req, res) => {
  const { email, password } = req.body;

  // Consulta no banco de dados para verificar se o usuário existe e as credenciais estão corretas
  connection.query(
    'SELECT * FROM candidates WHERE email = ? AND password = ?',
    [email, password],
    (err, results) => {
      if (err) {
        console.error('Erro ao executar consulta:', err);
        return res.status(500).json({ error: 'Erro no servidor' });
      }

      if (results.length === 0) {
        // Credenciais inválidas
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      // Credenciais corretas, gerar um token JWT com as informações do usuário
      const user = results[0];
      const token = jwt.sign({ id: user.id, email: user.email }, 'seuSegredoSuperSecreto');

      // Enviar o token como resposta
      res.json({ token });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
