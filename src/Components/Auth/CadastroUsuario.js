import React, { useState } from "react";

const CadastroUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [codigo, setCodigo] = useState(""); // Novo estado para o código

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoUsuario = { nome, email, senha, codigo };

    fetch("http://localhost:3001/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoUsuario),
    })
      .then((response) => {
        if (response.ok) {
          alert("Usuário cadastrado com sucesso!");
          setNome("");
          setEmail("");
          setSenha("");
          setCodigo(""); // Limpa o campo do código
        } else {
          alert("Erro ao cadastrar usuário.");
        }
      })
      .catch((error) => console.error("Erro:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Usuário</h2>
      <label>Nome:</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <label>E-mail:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Senha:</label>
      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <label>Código de 4 dígitos:</label>
      <input
        type="text"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        maxLength="4"
        pattern="\d{4}" // Aceita apenas 4 dígitos numéricos
        title="O código deve conter exatamente 4 dígitos numéricos."
        required
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroUsuario;