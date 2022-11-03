const letras = [['o'],['l'],['a'],[' ','!']];

//const resultado = letras.flat();

const resultado = letras
    .flat(Infinity)
    .flatMap(l => l.toUpperCase())
    .reduce((a,b)=> a+ b);

console.log(resultado);