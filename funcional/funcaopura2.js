//Função impura, pois o valor de sáida não é determinado
const getNumberRadom = (min,max) => {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
}

console.log(getNumberRadom(5,90));
console.log(getNumberRadom(5,90));
console.log(getNumberRadom(5,90));
console.log(getNumberRadom(5,90));