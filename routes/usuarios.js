const express = require("express")
const router = express.Router()
const {criar_usuario} = require("../controllers/usuarios")

router.route("/").post(criar_usuario)

module.exports = router