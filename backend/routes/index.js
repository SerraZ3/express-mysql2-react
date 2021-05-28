const express = require("express"),
  routes = express.Router(),
  niveis = require("./niveis");

// * locahost:5000/niveis
routes.use("/niveis", niveis);

module.exports = routes;
