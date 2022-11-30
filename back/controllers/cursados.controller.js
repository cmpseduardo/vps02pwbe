const Cursado = require("../models/Cursado")
const conexaoBD = require("../dao/connection")

const readAll = (req, res) => {
    conexaoBD.query(Cursado.readAll(), (err, result) => {
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