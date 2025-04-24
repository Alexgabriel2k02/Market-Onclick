import React, { useState, useEffect } from "react";
import ProdutosList from "./ProdutosList";
import ProdutosForm from "./ProdutosForm";
import "./ProdutosPage.css";

const ProdutosPage = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/produtos", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }
        return response.json();
      })
      .then((data) => {
        setProdutos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleAddProduto = (novoProduto) => {
    fetch("http://localhost:3001/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(novoProduto),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao adicionar produto");
        }
        return response.json();
      })
      .then((produtoAdicionado) => {
        setProdutos([...produtos, produtoAdicionado]);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleDeleteProduto = (id) => {
    fetch(`http://localhost:3001/produtos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao excluir produto");
        }
        setProdutos(produtos.filter((produto) => produto.id !== id));
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleEditProduto = (produtoAtualizado) => {
    fetch(`http://localhost:3001/produtos/${produtoAtualizado.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(produtoAtualizado),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao editar produto");
        }
        return response.json();
      })
      .then((produtoEditado) => {
        setProdutos(
          produtos.map((produto) =>
            produto.id === produtoEditado.id ? produtoEditado : produto
          )
        );
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

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