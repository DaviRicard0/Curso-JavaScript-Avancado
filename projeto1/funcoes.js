const path = require('path');
const fs = require('fs');

const lerDiretorio = caminho => {
    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho);
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo));
            resolve(arquivos);
        } catch (e) {
            reject(e);
        }
    })
}

const lerArquivo = (caminho) => {
    return new Promise((resolve,reject)=> {
        try {
            const conteudo = fs.readFileSync(caminho, {encoding:'utf-8'});
            resolve(conteudo.toString());
        } catch (e) {
            reject(e);
        }
    })
}

const lerArquivos = (caminhos) => {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)));
}

const elementosSRT = (padrao) => {
    return arr => {return arr.filter(el => el.endsWith(padrao))};
}

const removerSeVazio = arr => {
    return arr.filter(el => el.trim())
}

const removerSeIncluir = (padrao) => {
    return arr => {return arr.filter(el => !el.includes(padrao))};
}

const removerSeApenasNumero = array => {
    return array.filter(el => {
        const num = parseInt(el.trim());
        return num !== num;
    })
}

const removerSimbolo = simbolos => 
    arr => {
        return arr.map(el => {
            let novoTexto = el;
            simbolos.forEach(simbolo => {
                novoTexto = novoTexto.split(simbolo).join('')
            });
            return novoTexto;
        })
    };

const juntarConteudo = conteudo => conteudo.join(' ');

const separarPor = simbolo => conteudo =>{return conteudo.split(simbolo)};

const agruparPalavras = palavras => {
    return Object.values(palavras.reduce((acc,palavra)=>{
        const el = palavra.toLowerCase();
        const qtde = acc[el] ? acc[el].qtde + 1 : 1;
        acc[el] = { elemento: el, qtde}
        return acc;
    },{}));
}

const ordernarPorNumero = (attr, order = 'asc') => {
    return arr => {
        const asc = (o1,o2) => o1[attr] - o2[attr];
        const desc = (o1,o2) => o2[attr] - o1[attr];
        return arr.sort(order === 'asc' ? asc : desc);
    }
}

module.exports = {
    lerDiretorio,
    lerArquivos,
    elementosSRT,
    removerSeVazio,
    removerSeIncluir,
    removerSeApenasNumero,
    removerSimbolo,
    juntarConteudo,
    separarPor,
    agruparPalavras,
    ordernarPorNumero
}