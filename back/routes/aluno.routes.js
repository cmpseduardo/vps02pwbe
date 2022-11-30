const express = require('express')
const router = express.Router()

const Aluno = require("../controllers/alunos.controller")

router.get("/read", Aluno.readAll)
router.post("/create", Aluno.create)
router.put("/update", Aluno.update)
router.delete("/delete/:id", Aluno.del)

module.exports = router