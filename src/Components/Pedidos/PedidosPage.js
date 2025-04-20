import React, { useState } from "react";
import PedidosForm from "./PedidosForm";
import PedidosList from "./PedidosList";
import "./PedidosPage.css";

const PedidosPage = () => {
  const [pedidos, setPedidos] = useState([
    { id: 1, cliente: "João Silva", produto: "Picanha", quantidade: 2 },
    { id: 2, cliente: "Maria Oliveira", produto: "Feijão", quantidade: 5 },
  ]);

  const handleAddPedido = (novoPedido) => {
    setPedidos([...pedidos, novoPedido]);
  };

  const handleDeletePedido = (id) => {
    setPedidos(pedidos.filter((pedido) => pedido.id !== id));
  };

  return (
    <div className="pedidos-page">
      <div className="pedidos-form-page">
        <PedidosForm onAddPedido={handleAddPedido} />
      </div>
      <div className="pedidos-list">
        <PedidosList
          pedidos={pedidos}
          onDeletePedido={handleDeletePedido}
        />
      </div>
    </div>
  );
};

export default PedidosPage;