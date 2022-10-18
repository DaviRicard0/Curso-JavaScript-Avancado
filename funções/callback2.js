const  fs = require('fs');
const  path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

const exibirConteudo = (_,data) =>
{
    console.log(data.toString())
}

console.log('Início...')
fs.readFile(
    caminho,
    exibirConteudo
);
fs.readFile(
    caminho,
    (_,conteudo)=>{console.log(conteudo.toString())}
);
console.log('Fim...')

console.log('Início Sync...')
const consteudo = fs.readFileSync(caminho);
console.log(consteudo.toString())
console.log('Fim Sync...')