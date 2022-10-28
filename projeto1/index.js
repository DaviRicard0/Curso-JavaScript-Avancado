const fn = require('./funcoes');
const path = require('path');

const caminho = path.join(__dirname, 'legendas');

const simbolos = [
    '.','?','-',',','"', '♪','_','<i>','</i>','\r','[',']','{','}','(',')'
];



fn.lerDiretorio(caminho)
    //.then(arquivos => arquivos.filter(arq => arq.includes(".srt")))
    .then(fn.elementosSRT('.srt'))
    .then(fn.lerArquivos)
    .then(fn.juntarConteudo)
    .then(fn.separarPor('\n'))
    .then(fn.removerSeVazio)
    .then(fn.removerSeIncluir('-->'))
    .then(fn.removerSeApenasNumero)
    .then(fn.removerSimbolo(simbolos))
    .then(fn.juntarConteudo)
    .then(fn.separarPor(' '))
    .then(fn.removerSeVazio)
    .then(fn.removerSeApenasNumero)
    .then(fn.agruparPalavras)
    .then(fn.ordernarPorNumero('qtde','desc'))
    .then(console.log);
