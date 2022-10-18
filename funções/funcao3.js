//arrow function
const saudacao = 
(nome = "Nenhum") => `Bom dia ${nome}`;
console.log(saudacao('Davi'))

const somar = (...nums) => {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}

console.log(somar(1,7,3));

const potencia = base => exp => Math.pow(base,exp)
console.log(potencia(2)(8))

//this

Array.prototype.ultimo = function () {
    console.log(this[this.length - 1]);
}

Array.prototype.primeiro = function() {
    console.log(this[0]);
}

const nume = [10,2,300]
nume.ultimo()
nume.primeiro()