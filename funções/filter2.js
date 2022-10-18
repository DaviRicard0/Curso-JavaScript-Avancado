const array = [2,3,12,41,23]
//Criando um filter
Array.prototype.meuFilter = function(fn) {
    const resultado = []
    for (let i = 0; i < this.length; i++) {
        if(fn(this[i],i,this))
            resultado.push(this[i]);
    }
    return resultado;
}

const result = array.meuFilter(item => item > 5 && item < 41);
console.log(result);