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
    res.json({ message: "Listar dados" });
  },
  show: async (req, res) => {
    res.json({ message: "Mostrar 1 dado" });
  },
  update: async (req, res) => {
    res.json({ message: "Atualizar 1 dado" });
  },
  delete: async (req, res) => {
    res.json({ message: "Apagar 1 dado" });
  },
};
