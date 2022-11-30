const Curso = require("../models/Curso")
const conexaoBD = require("../dao/connection")

const readAll = (req, res) => {
    conexaoBD.query(Curso.readAll(), (err, result) => {
        if (err == null) {
            res.json(result).end()
        } else {
            res.json(err).end()
        }
    }
    )
}

module.exports = {
    readAll
}