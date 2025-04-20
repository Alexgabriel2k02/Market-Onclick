import React, { useState } from "react";
import ClientesForm from "./ClientesForm";
import ClientesList from "./ClientesList";
import "./ClientesPage.css";

const ClientesPage = () => {
  const [clientes, setClientes] = useState([
    { id: 1, nome: "João Silva", email: "joao@email.com", telefone: "123456789" },
    { id: 2, nome: "Maria Oliveira", email: "maria@email.com", telefone: "987654321" },
  ]);

  const handleAddCliente = (novoCliente) => {
    setClientes([...clientes, novoCliente]);
  };

  const handleDeleteCliente = (id) => {
    setClientes(clientes.filter((cliente) => cliente.id !== id));
  };

  return (
    <div className="clientes-page">
      <div className="clientes-form">
        <ClientesForm onAddCliente={handleAddCliente} />
      </div>
      <div className="clientes-list">
        <ClientesList
          clientes={clientes}
          onDeleteCliente={handleDeleteCliente}
        />
      </div>
    </div>
  );
};

export default ClientesPage;