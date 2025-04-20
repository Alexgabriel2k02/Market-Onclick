import React, { useState } from "react";

const ClientesForm = ({ onAddCliente }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoCliente = {
      id: Date.now(),
      nome,
      email,
      telefone,
    };
    onAddCliente(novoCliente);
    setNome("");
    setEmail("");
    setTelefone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Novo Cliente</h2>
      <label>Nome:</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Telefone:</label>
      <input
        type="text"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        required
      />
      <button type="submit">Salvar Cliente</button>
    </form>
  );
};

export default ClientesForm;