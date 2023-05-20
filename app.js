const express = require("express");
const { API_VERSION } = require("./constants");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//static folder
app.use(express.static("uploads"));

//CORS
app.use(cors());

//Importar routings



//Configurar routings



module.exports = app;