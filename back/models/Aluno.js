const readAll = (model) => {
    return `SELECT * FROM alunos`
}

const create = (model) => {
    return `INSERT INTO alunos VALUES(DEFAULT, '${model.nome}', '${model.nascimento})'`
}

const del = (model) => {
    return `DELETE FROM alunos WHERE id = ${model.id}`
}

const update = (model) => {
    return `UPDATE alunos SET nome = '${dados.nome}', nascimento = '${dados.nascimento}' WHERE id = ${dados.id} `;
}

module.exports = {
    readAll,
    create,
    del,
    update
}

