import React from "react";
import ReactDOM from "react-dom/client"; // Import correto para React 18
import { BrowserRouter } from "react-router-dom"; // Envolve o App com o BrowserRouter
import AppRoutes from "./routes/App.routes"; // Importa as rotas da aplicação

const root = ReactDOM.createRoot(document.getElementById("root")); // Cria a raiz
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

const express = require('express');
const connection = require('./Config/db'); // Importa a conexão com o banco de dados

const app = express();
const PORT = 3000;

// Middleware para lidar com JSON
app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao Mercado OnClick!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
