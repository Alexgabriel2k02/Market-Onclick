import React, { useState, useEffect } from "react";
import PedidosForm from "./PedidosForm";
import PedidosList from "./PedidosList";
import "./PedidosPage.css";

const PedidosPage = () => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Buscar pedidos da API ao carregar a página
  useEffect(() => {
    fetch("http://localhost:3001/pedidos", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar pedidos");
        }
        return response.json();
      })
      .then((data) => {
        setPedidos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Adicionar pedido na API
  const handleAddPedido = (novoPedido) => {
    fetch("http://localhost:3001/pedidos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(novoPedido),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao adicionar pedido");
        }
        return response.json();
      })
      .then((pedidoAdicionado) => {
        setPedidos([...pedidos, pedidoAdicionado]);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  if (loading) {
    return <p>Carregando pedidos...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div className="pedidos-page">
      <PedidosForm onAddPedido={handleAddPedido} />
      <PedidosList pedidos={pedidos} />
    </div>
  );
};

export default PedidosPage;