const  fs = require('fs');
const  path = require('path');

const lerAquivo = caminho => {
    return new Promise (resolve =>{
        fs.readFile(
            caminho,
            (_,conteudo)=>{resolve(conteudo.toString())}
        );
    });
}

const caminho = path.join(__dirname, 'dados.txt');

lerAquivo(caminho)
    .then(result => result.split('\n'))
    .then(result => console.table(result));