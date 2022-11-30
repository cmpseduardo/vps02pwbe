const Aluno = require("../models/Aluno")
const conexaoBD = require("../dao/connection")


const create = (req, res) => {
    conexaoBD.query(Aluno.create(req.body), (err, result) => {
        if (err == null) {
            res.status(json).end()
        } else {
            res.json(err).end()
        }
    }
    )
}

const readAll = (req, res) => {
    conexaoBD.query(Aluno.readAll(), (err, result) => {
        if (err == null) {
            res.json(result).end()
        } else {
            res.json(err).end()
        }
    }
    )
}


const update = (req, res) => {
    conexaoBD.query(Aluno.update(req.body), (err, result) => {
        if(result.affectedRows > 0){
            res.status(200).end()
        } else {
            res.json(err).end()
        }
    })
}

const del = (req, res) => {
    conexaoBD.query(Aluno.delete(req.body), (err, result) => {
        if(result.affectedRows > 0){
            res.status(200).end()
        } else {
            res.json(err).end()
        }
    })
}

module.exports = {
    create,
    readAll,
    update,
    del
}