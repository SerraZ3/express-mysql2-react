const express = require("express"),
  app = express(),
  port = 5000,
  cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log("Rodando em http://localhost:" + port);
});
