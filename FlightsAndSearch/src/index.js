const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/cityRepository");
const ApiRoutes = require('./Routes/index');


async function startServer() {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api',ApiRoutes);

  const repo = new CityRepository();
  app.get("/",async (req, res) => {
    res.send("<h1>Hello World<h1/>");
  });
  app.listen(PORT,async () => {
    console.log(`The server has been started on the port ${PORT}`);
  });
}

startServer();
