const express = require('express');
const cors = require('cors');

const Cursado = require("./routes/cursado.routes")
const Curso = require("./routes/curso.routes")
const Aluno = require("./routes/aluno.routes")



 const app = express()
     .use(express.json())
     .use(cors())
     .use ("/alunos", Aluno)
     .use ("/cursados", Cursado)
     .use ("/cursos", Curso);
    
     
app.listen(3000, () => {
    console.log('API em execução na porta ' + 3000);
 });
