const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/cityRepository");


async function startServer() {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  const repo = new CityRepository();
  app.get("/",async (req, res) => {
    res.send("<h1>Hello World<h1/>");
  });
  app.listen(PORT,async () => {
    console.log(`The server has been started on the port ${PORT}`);
  });
}

startServer();
