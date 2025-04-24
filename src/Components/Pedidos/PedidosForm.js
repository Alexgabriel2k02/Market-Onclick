import React, { useState } from "react";
import "./PedidosForm.css";

const PedidosForm = ({ onAddPedido }) => {
  const [cliente, setCliente] = useState("");
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoPedido = { cliente, produto, quantidade: parseInt(quantidade) };
    onAddPedido(novoPedido);
    setCliente("");
    setProduto("");
    setQuantidade("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Novo Pedido</h2>
      <label>Cliente:</label>
      <input
        type="text"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
        required
      />
      <label>Produto:</label>
      <input
        type="text"
        value={produto}
        onChange={(e) => setProduto(e.target.value)}
        required
      />
      <label>Quantidade:</label>
      <input
        type="number"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
        required
      />
      <button type="submit">Salvar Pedido</button>
    </form>
  );
};

export default PedidosForm;