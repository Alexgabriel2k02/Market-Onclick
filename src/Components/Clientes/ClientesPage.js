import React, { useState, useEffect } from "react";
import ClientesForm from "./ClientesForm";
import ClientesList from "./ClientesList";
import "./ClientesPage.css";

const ClientesPage = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Buscar clientes da API ao carregar a página
  useEffect(() => {
    fetch("http://localhost:3001/clientes", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar clientes");
        }
        return response.json();
      })
      .then((data) => {
        setClientes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Adicionar cliente na API
  const handleAddCliente = (novoCliente) => {
    fetch("http://localhost:3001/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(novoCliente),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao adicionar cliente");
        }
        return response.json();
      })
      .then((clienteAdicionado) => {
        setClientes([...clientes, clienteAdicionado]);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // Excluir cliente na API
  const handleDeleteCliente = (id) => {
    fetch(`http://localhost:3001/clientes/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao excluir cliente");
        }
        setClientes(clientes.filter((cliente) => cliente.id !== id));
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  if (loading) {
    return <p>Carregando clientes...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div className="clientes-page">
      <ClientesForm onAddCliente={handleAddCliente} />
      <ClientesList clientes={clientes} onDeleteCliente={handleDeleteCliente} />
    </div>
  );
};

export default ClientesPage;