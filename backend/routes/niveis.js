const express = require("express"),
  routes = express.Router(),
  niveisController = require("../controllers/niveis");

// * POST locahost:5000/niveis
routes.post("/", niveisController.store);
// * GET locahost:5000/niveis
routes.get("/", niveisController.index);
// * GET locahost:5000/niveis/:id
routes.get("/:id", niveisController.show);
// * PUT locahost:5000/niveis/:id
routes.put("/:id", niveisController.update);
// * DELETE locahost:5000/niveis/:id
routes.delete("/:id", niveisController.delete);

module.exports = routes;
