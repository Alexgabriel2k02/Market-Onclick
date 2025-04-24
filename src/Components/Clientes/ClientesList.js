import React from "react";
import "./ClientesList.css";

const ClientesList = ({ clientes, onDeleteCliente }) => {
  return (
    <div>
      <h2>Lista de Clientes</h2>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            {cliente.nome} - {cliente.email} - {cliente.telefone}
            <button onClick={() => onDeleteCliente(cliente.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientesList;