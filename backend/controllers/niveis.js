const configDB = require("../config/database"),
  mysql = require("mysql2/promise");
// ! CRUD
// * C - CREATE - STORE - Criar dados - POST
// * R - READ - INDEX - Listar dados - GET
// * R - READ - SHOW - Mostrar 1 dado - GET
// * U - UPDATE - UPDATE - Atualiza 1 dado - PUT/PATCH
// * D - DELETE - DELETE - Apaga 1 dado - DELETE
module.exports = {
  store: async (req, res) => {
    try {
      const { titulo, descricao } = req.body;

      if (!titulo || !descricao) {
        throw { message: "Campos vazios" };
        // ! Pode usar dessa forma caso não queira usar o throw
        // return res.status(400).json({ message: "Campos vazios" });
      }
      const conn = await mysql.createConnection(configDB);
      // * INSERT INTO niveis (titulo, descricao) VALUES ("Iniciante", "Conhecimento basico");
      const result = await conn.execute(
        `INSERT INTO niveis (titulo, descricao) VALUES(?, ?)`,
        [titulo, descricao]
      );
      if (!result[0].affectedRows) throw { message: "Erro ao inserir dados" };

      return res.json({ message: "Adicionar dado" });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  index: async (req, res) => {
    try {
      const { name, order, orderBy = "titulo" } = req.query;
      const conn = await mysql.createConnection(configDB);
      var query = "SELECT * FROM niveis ";
      if (name) query += "WHERE titulo LIKE ? ";
      if (order) query += `ORDER BY ${orderBy} ${order}`;
      const [rows] = await conn.execute(query, [`%${name}%`]);
      return res.status(200).json({ message: "Mostrar dados", niveis: rows });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const conn = await mysql.createConnection(configDB);
      const result = await conn.execute("SELECT * FROM niveis WHERE id = ?", [
        id,
      ]);
      if (!result[0].affectedRows) throw { message: "Erro ao buscar id" };
      return res
        .status(200)
        .json({ message: "Mostrar 1 dados", niveis: rows[0] });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  update: async (req, res) => {
    res.json({ message: "Atualizar 1 dado" });
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const conn = await mysql.createConnection(configDB);
      const result = await conn.execute("DELETE FROM niveis WHERE id = ?", [
        id,
      ]);
      if (!result[0].affectedRows) throw { message: "Erro ao deletar dado" };
      return res.status(200).json({ message: "Deletado com sucesso" });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
};
