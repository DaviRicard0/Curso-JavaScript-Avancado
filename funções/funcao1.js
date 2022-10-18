//Declareação de função
function bomDia() {
    console.log("Bom dia")
}

bomDia();

//Função expressa
const boaNoite = function () {
    console.log('Boa noite')
}

boaNoite()

function subtrair(a = 0,b = 0) {
    return a - b;
}

const resultado = subtrair();
console.log(resultado);