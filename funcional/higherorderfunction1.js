//Funções que operam em outras funções

const exec = (fn, ...params) => {
    return texto => `${texto} ${fn(...params)}`;
}

const somar = (a,b,c) => {
    return a + b + c;
}

const multiplicar = (a,b) => {
    return a * b;
}

console.log(exec(somar,5,6,7)('O resultado da soma é: '))
console.log(exec(multiplicar,5,6)('O resultado da multipicação é: '))