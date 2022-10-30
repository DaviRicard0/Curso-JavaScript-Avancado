const composicao = (...fns) => {
    return valor => {
        return fns.reduce((acc,fn)=>{
            return fn(acc);
        },valor); 
    }
}

const gritar = texto => {
    return texto.toUpperCase();
}

const enfatizar = texto => {
    return `${texto}!!!!`;
}

const tornarLento = texto => {
    return texto.split('').join(' ');
}

const resultado = composicao(gritar,enfatizar,tornarLento)('PARA');
console.log(resultado);