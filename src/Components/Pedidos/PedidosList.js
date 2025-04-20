import React from "react";
import "./PedidosList.css"; 

const PedidosList = ({ pedidos, onDeletePedido }) => {
  return (
    <div className="container">
      <h2>Lista de Pedidos</h2>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id} className="pedidos-item">
            <span>
              {pedido.cliente} - {pedido.produto} - Quantidade: {pedido.quantidade}
            </span>
            <button onClick={() => onDeletePedido(pedido.id)} className="btn-delete">
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PedidosList;