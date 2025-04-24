import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import CadastroUsuario from "../Components/Auth/CadastroUsuario";
import Login from "../Components/Auth/Login";
import ProdutosPage from "../Components/Produtos/ProdutosPage";
import ClientesPage from "../Components/Clientes/ClientesPage";
import PedidosPage from "../Components/Pedidos/PedidosPage";
import VendasPage from "../Components/Vendas/VendasPage"; // Página de vendas
import ProtectedRoute from "../Components/Auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Página inicial */}
      <Route path="/" element={<Home />} />

      {/* Rotas públicas */}
      <Route path="/cadastro" element={<CadastroUsuario />} />
      <Route path="/login" element={<Login />} />

      {/* Rotas protegidas */}
      <Route
        path="/produtos"
        element={
          <ProtectedRoute>
            <ProdutosPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/clientes"
        element={
          <ProtectedRoute>
            <ClientesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pedidos"
        element={
          <ProtectedRoute>
            <PedidosPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vendas"
        element={
          <ProtectedRoute>
            <VendasPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;