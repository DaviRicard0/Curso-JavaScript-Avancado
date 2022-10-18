function Produto(nome,preco, desc = 0.15) {
    this.nome = nome;
    this.preco = preco;
    this._desc = desc;

    this.precoFinal = function() {
        return this.preco * (1-this.desc)
    };
}

Object.defineProperty(Produto.prototype, 'desc' , {
    get: function () {
        return this._desc;
    },
    set: function(novoDesconto) {
        if (novoDesconto > 0 && novoDesconto <= 1) {
            this._desc = novoDesconto;
        }
    }
});

Object.defineProperty(Produto.prototype, 'descString' , {
    get: function () {
        return `Desconto ${this._desc * 100}%`;
    }
});

const p1 = new Produto('Caneta',8.99);
console.log(p1.nome);
const p2 = new Produto('Papel',10.99);
p2.desc = 0.8;
console.log(p2.precoFinal());
console.log(p2.descString);