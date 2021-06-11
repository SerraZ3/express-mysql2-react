import React, { useState, useEffect } from "react";
import axios from "axios";
function ListNivel() {
  const [niveis, setNiveis] = useState([]);
  useEffect(() => {
    const getNiveis = async () => {
      try {
        const response = await axios.get("http://localhost:5000/niveis");
        setNiveis(response.data.niveis);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getNiveis();
  }, []);
  return (
    <div>
      <h1>Lista de níveis</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>titulo</th>
            <th>descrição</th>
          </tr>
        </thead>
        <tbody>
          {niveis.map((nivel, idx) => (
            <tr key={idx}>
              <td>{nivel.id}</td>
              <td>{nivel.titulo}</td>
              <td>{nivel.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListNivel;
