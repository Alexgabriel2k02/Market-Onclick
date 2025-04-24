import React from "react";

import "./ProdutosList.css"; 

const ProdutosList = ({ produtos, onDeleteProduto, onEditProduto }) => {
  return (
    <div className="container">
      <h2>Lista de Produtos</h2>
      {produtos.length > 0 ? (
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id} className="produto-item">
              <span>
                {produto.nome} - R$ {Number(produto.preco).toFixed(2)} - Estoque: {produto.estoque} - Status: {produto.status}
              </span>
              <div className="produto-actions">
                <button
                  className="btn-edit"
                  onClick={() => onEditProduto(produto)}
                  aria-label={`Editar produto ${produto.nome}`}
                >
                  Editar
                </button>
                <button
                  className="btn-delete"
                  onClick={() => onDeleteProduto(produto.id)}
                  aria-label={`Excluir produto ${produto.nome}`}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum produto cadastrado.</p>
      )}
    </div>
  );
};

export default ProdutosList;