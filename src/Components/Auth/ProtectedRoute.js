import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Verifica se o token está armazenado

  if (!token) {
    // Redireciona para a página de login se o token não existir
    return <Navigate to="/login" />;
  }

  return children; // Renderiza o componente protegido
};

export default ProtectedRoute;