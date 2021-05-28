const express = require("express"),
  app = express(),
  port = 5000,
  cors = require("cors"),
  routes = require("./routes");

app.use(express.json());
app.use(cors());

app.use("/", routes);

app.listen(port, () => {
  console.log("Rodando em http://localhost:" + port);
});
