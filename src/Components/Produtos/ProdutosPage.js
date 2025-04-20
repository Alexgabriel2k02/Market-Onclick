import React, { useState } from "react";
import ProdutosList from "./ProdutosList";
import ProdutosForm from "./ProdutosForm";
import "./ProdutosPage.css";

//produtos inputados no form para teste (retirar depois)
const ProdutosPage = () => {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Produto 1", preco: 10.0, estoque: 5 },
    { id: 2, nome: "Produto 2", preco: 20.0, estoque: 3 },
    { id: 3, nome: "Picanha", preco: 49.8, estoque: 6 },
  ]);

  const handleAddProduto = (novoProduto) => {
    setProdutos([...produtos, novoProduto]);
  };

  const handleDeleteProduto = (id) => {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  };

  const handleEditProduto = (produtoAtualizado) => {
    setProdutos(
      produtos.map((produto) =>
        produto.id === produtoAtualizado.id ? produtoAtualizado : produto
      )
    );
  };

  return (
    <div className="produtos-page">
      <ProdutosForm onAddProduto={handleAddProduto} />
      <ProdutosList
        produtos={produtos}
        onDeleteProduto={handleDeleteProduto}
        onEditProduto={handleEditProduto}
      />
    </div>
  );
};

export default ProdutosPage;