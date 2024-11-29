const express = require("express")
const app = express.Router()
const {tela_inicial, ver_usuarios} = require("../controllers/admin")

app.route("/").post(tela_inicial)
app.route("/ver_usuarios").get(ver_usuarios)

module.exports = app