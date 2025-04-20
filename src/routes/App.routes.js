import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import ProdutosPage from "../Components/Produtos/ProdutosPage";
import ClientesPage from "../Components/Clientes/ClientesPage";
import PedidosPage from "../Components/Pedidos/PedidosPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Define a página inicial */}
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ProdutosPage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/pedidos" element={<PedidosPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;