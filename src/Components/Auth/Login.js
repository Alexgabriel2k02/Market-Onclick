import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          alert("Login realizado com sucesso!");
          navigate("/produtos");
        } else {
          alert("Login inválido.");
        }
      })
      .catch((error) => console.error("Erro:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
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
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;