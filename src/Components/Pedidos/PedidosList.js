import React from "react";

const PedidosList = ({ pedidos, onDeletePedido }) => {
  return (
    <div>
      <h2>Lista de Pedidos</h2>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>
            {pedido.cliente} - {pedido.produto} - Quantidade: {pedido.quantidade}
            <button onClick={() => onDeletePedido(pedido.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PedidosList;