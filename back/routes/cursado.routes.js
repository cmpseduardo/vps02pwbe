const express = require('express')
const router = express.Router()

const Cursado = require("../controllers/cursados.controller")

router.get("/read", Cursado.readAll)

module.exports = router