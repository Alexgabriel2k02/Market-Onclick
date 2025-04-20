import React from "react";

const ProdutosList = ({ produtos, onDeleteProduto, onEditProduto }) => {
  return (
    <div className="produtos-list">
      <h2>Lista de Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id} className="produto-item">
            <span>
              {produto.nome} - R$ {produto.preco.toFixed(2)} - Estoque: {produto.estoque}
            </span>
            <div className="produto-actions">
              <button
                className="btn-edit"
                onClick={() => onEditProduto(produto)}
              >
                Editar
              </button>
              <button
                className="btn-delete"
                onClick={() => onDeleteProduto(produto.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProdutosList;