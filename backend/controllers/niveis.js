// ! CRUD
// * C - CREATE - STORE - Criar dados - POST
// * R - READ - INDEX - Listar dados - GET
// * R - READ - SHOW - Mostrar 1 dado - GET
// * U - UPDATE - UPDATE - Atualiza 1 dado - PUT/PATCH
// * D - DELETE - DELETE - Apaga 1 dado - DELETE
module.exports = {
  store: async (req, res) => {
    res.json({ message: "Adicionar dado" });
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
