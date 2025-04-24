import React, { useState } from "react";
import "./ProdutosForm.css";

const ProdutosForm = ({ onAddProduto }) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [status, setStatus] = useState("Ativo");

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoProduto = {
      id: Date.now(),
      nome,
      preco: parseFloat(preco),
      estoque: parseInt(estoque),
      status,
    };
    onAddProduto(novoProduto);
    setNome("");
    setPreco("");
    setEstoque("");
    setStatus("Ativo");
  };

  return (
    <div>
      <main className="container">
        <h2>Cadastrar Novo Produto</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome do Produto:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <label htmlFor="preco">Preço (R$):</label>
          <input
            type="number"
            id="preco"
            name="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            step="0.01"
            required
          />

          <label htmlFor="estoque">Estoque:</label>
          <input
            type="number"
            id="estoque"
            name="estoque"
            value={estoque}
            onChange={(e) => setEstoque(e.target.value)}
            required
          />

          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>

          <button type="submit" className="btn-primary">
            Salvar Produto
          </button>
        </form>
      </main>
    </div>
  );
};

export default ProdutosForm;