import React, { useState } from "react";

function CreateNivel() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <div>
      <h1>Criar nivel</h1>
      <form>
        <input
          type="text"
          placeholder="Titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
export default CreateNivel;
