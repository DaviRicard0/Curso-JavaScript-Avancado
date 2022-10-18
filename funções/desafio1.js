//somar(3)(4)(5)

function somar(n1 = 0) {
    return function(n2 = 0){
        return function(n3 = 0){
            return n1 + n2 + n3
        }
    }
}

const soma = somar(3)(9)(9);
console.log(soma)

//calcular(3)(7)(fn)

function operacao(n1,n2) {
    return n1 * n2;
}

function calcular(n1) {
    return function(n2){
        return function(fn){
            return fn(n1,n2)
        }
    }
}

const calculado = calcular(5)(9)(operacao);
console.log(calculado)