//lo que se instala
const express = require('express');
const logger = require("morgan");
const cors = require("cors")

//importar ruta
const indexRouter = require("./routes/index")
const apiRouter = require("./routes/api")

//connect
const {connect} = require ("./db/db")

//Express
const app = express()

//usos con express
app.use(logger("dev"))
app.use(express.json())
app.use(cors())

//rutas
app.use("/", indexRouter)
app.use("/api", apiRouter)

//conexion con la db
connect();


module.exports = app