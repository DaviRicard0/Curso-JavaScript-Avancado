function tchau() {
    console.log('tchau')
}

function ola() {
    console.log('olá')
}

//Passar uma função como param
function executar(fn) {
    if (typeof fn !== 'function') {
        return console.log('Não é uma função');
    }
    fn()
}

executar(ola)
executar(tchau)

// Retornar uma função a partir de outra

function potencia(base) {
    return function (exp) {
        return Math.pow(base,exp);
    };
}

const potencia2 = potencia(2);
console.log(potencia2(10));

const resultado = potencia(2)(10);
console.log(resultado)