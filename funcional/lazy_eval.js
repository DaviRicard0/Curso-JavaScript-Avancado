const eager = (a,b) => {
    //processamento
    const fim = Date.now() + 2500;
    while(Date.now() < fim){

    }

    const valor = Math.pow(a,3);
    return valor + b;
}

const lazy = a => {
    //processamento
    const fim = Date.now() + 2500;

    while(Date.now() < fim){}

    const valor = Math.pow(a,3);
    return b => {
        return valor + b;
    };
}

console.time("#!")
console.log(eager(3,100))
console.log(eager(3,200))
console.log(eager(3,300))
console.timeEnd("#!")

console.time("#2")
const lazy3 = lazy(3);
console.log(lazy3(100))
console.log(lazy3(200))
console.log(lazy3(300))
console.timeEnd("#2")