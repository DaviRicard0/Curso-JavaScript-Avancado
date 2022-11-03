const fn = require('./funcoes');
const path = require('path');

const caminho = path.join(__dirname, 'legendas');

const simbolos = [
    '.','?','-',',','"', '♪','_','<i>','</i>','\r','[',']','{','}','(',')'
];

const palavraMaisUsadas = fn.composicao(
    fn.lerDiretorio,
    fn.elementosSRT('.srt'),
    fn.lerArquivos,
    fn.juntarConteudo,
    fn.separarPor('\n'),
    fn.removerSeVazio,
    fn.removerSeIncluir('-->'),
    fn.removerSeApenasNumero,
    fn.removerSimbolo(simbolos),
    fn.juntarConteudo,
    fn.separarPor(' '),
    fn.removerSeVazio,
    fn.removerSeApenasNumero,
    fn.agruparPalavras,
    fn.ordernarPorNumero('qtde','desc')
)(caminho);

palavraMaisUsadas.then(console.log);