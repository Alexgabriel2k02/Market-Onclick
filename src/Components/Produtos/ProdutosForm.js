import React, { useState, useEffect } from "react";
import "./ProdutosForm.css";

const ProdutosForm = ({ onAddProduto }) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");

  useEffect(() => {
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoProduto = {
      id: Date.now(),
      nome,
      preco: parseFloat(preco),
      estoque: parseInt(estoque),
    };
    onAddProduto(novoProduto);
    setNome("");
    setPreco("");
    setEstoque("");
  };

  return (
    <div className="produtos-form-page">
      <header className="produtos-header">
        <h1>
          <span className="text-primary">MERCADO</span> ONCLICK
        </h1>
      </header>

      <main className="produtos-container">
        <h2>Cadastrar Novo Produto</h2>
        <form onSubmit={handleSubmit} className="produtos-form">
          <div className="form-group">
            <label htmlFor="nome">Nome do Produto:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite o nome do produto"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="preco">Preço (R$):</label>
            <input
              type="number"
              id="preco"
              name="preco"
              step="0.01"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              placeholder="Digite o preço"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="estoque">Estoque:</label>
            <input
              type="number"
              id="estoque"
              name="estoque"
              value={estoque}
              onChange={(e) => setEstoque(e.target.value)}
              placeholder="Digite a quantidade em estoque"
              required
            />
          </div>

          <button type="submit" className="btn-primary">Salvar Produto</button>
        </form>
      </main>

      <footer className="produtos-footer">
        <p>
          &copy; <span id="current-year"></span> MERCADO ONCLICK
        </p>
      </footer>
    </div>
  );
};

export default ProdutosForm;