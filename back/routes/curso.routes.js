const express = require('express')
const router = express.Router()

const Curso = require("../controllers/cursos.controller")

router.get("/read", Curso.readAll)

module.exports = router