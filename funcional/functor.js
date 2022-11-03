//wrapper

const nums = [1,2,3,4,5];

const newNums = nums
    .map(el => el + 10)
    .map(el => el * 10);
console.log(newNums)

const TipoSeguro = valor => {
    return {
        valor,
        invalido() {
            return this.valor === null || this.valor === undefined;
        },
        map(fn) {
            if (this.invalido()) {
                return(TipoSeguro(null));
            }
            const novoValor = fn(this.valor);
            return TipoSeguro(novoValor);
        }
    }
}

const resultado = TipoSeguro('Esse é p texto').map(t => t.toUpperCase()).map(t => null);
console.log(resultado.valor);