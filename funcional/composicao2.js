const composicao = (...fns) => {
    return valor => {
        return fns.reduce(async (acc,fn)=>{
            if (Promise.resolve(acc) === acc) {
                return fn(await acc);
            }else{
                return fn(acc);
            }
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
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(texto.split('').join(' ')); 
        },2000);
    });
}

composicao(gritar,enfatizar,tornarLento)('PARA').then(console.log);
//console.log(resultado);