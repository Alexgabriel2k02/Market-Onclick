import React from "react";
import "./PedidosList.css";

const PedidosList = ({ pedidos }) => {
  return (
    <div>
      <h2>Lista de Pedidos</h2>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>
            Cliente: {pedido.cliente} | Produto: {pedido.produto} | Quantidade:{" "}
            {pedido.quantidade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PedidosList;