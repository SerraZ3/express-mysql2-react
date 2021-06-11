import React, { useState } from "react";
import axios from "axios";
function CreateNivel() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/niveis", {
        titulo,
        descricao,
      });
      setTitulo("");
      setDescricao("");
      alert("Adicionado com sucesso");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Criar nivel</h1>
      <form onSubmit={handleSubmit}>
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
