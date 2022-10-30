let qtdeDeExecucoes = 0;

//Função pura
const soma = (a,b) => {
    qtdeDeExecucoes += 1;//Essa dependencia externa torna ela impura
    return a + b;
};

console.log(qtdeDeExecucoes);
console.log(soma(5,9));
console.log(soma(5,9));
console.log(soma(5,9));
console.log(qtdeDeExecucoes);