import React, { useState, useEffect } from "react";
import "./VendasPage.css";

const VendasPage = () => {
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [mensagem, setMensagem] = useState("");

  // Buscar produtos disponíveis para venda
  useEffect(() => {
    fetch("http://localhost:3001/produtos", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Filtra apenas produtos ativos
        const produtosAtivos = data.filter((produto) => produto.status === "Ativo");
        setProdutos(produtosAtivos);
      })
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  const handleVenda = (e) => {
    e.preventDefault();

    // Validações
    const produto = produtos.find((p) => p.id === parseInt(produtoSelecionado));
    if (!produto) {
      setMensagem("Produto inválido.");
      return;
    }

    if (produto.estoque < quantidade) {
      setMensagem("Quantidade solicitada excede o estoque disponível.");
      return;
    }

    // Dados da venda
    const novaVenda = {
      produtoId: produto.id,
      quantidade: parseInt(quantidade),
      preco: produto.preco,
    };

    // Enviar venda para a API
    fetch("http://localhost:3001/vendas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(novaVenda),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao registrar venda.");
        }
        return response.json();
      })
      .then(() => {
        setMensagem("Venda registrada com sucesso!");
        setQuantidade("");
        setProdutoSelecionado("");
      })
      .catch((error) => {
        console.error("Erro ao registrar venda:", error);
        setMensagem("Erro ao registrar venda.");
      });
  };

  return (
    <div className="vendas-page">
      <h2>Realizar Venda</h2>
      {mensagem && <p className="mensagem">{mensagem}</p>}
      <form onSubmit={handleVenda}>
        <label>Produto:</label>
        <select
          value={produtoSelecionado}
          onChange={(e) => setProdutoSelecionado(e.target.value)}
          required
        >
          <option value="">Selecione um produto</option>
          {produtos.map((produto) => (
            <option key={produto.id} value={produto.id}>
              {produto.nome} - R$ {produto.preco.toFixed(2)} (Estoque: {produto.estoque})
            </option>
          ))}
        </select>

        <label>Quantidade:</label>
        <input
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          min="1"
          required
        />

        <button type="submit">Registrar Venda</button>
      </form>
    </div>
  );
};

export default VendasPage;