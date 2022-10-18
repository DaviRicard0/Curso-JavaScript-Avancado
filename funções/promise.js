//Trabalhando com promise
const quadrado = valor => valor ** 2;

const promise = cumprirPromesa => {
    let a;
    setTimeout(()=>{
        a = 5
        cumprirPromesa(a);
    },5000);
}

new Promise(promise)
    .then(quadrado)
    .then(console.log);