class Produto {
    constructor(nome,preco,desc = 0.15){
        this._nome = nome;
        this._preco = preco;
        this._desc = desc;
    }

    get nome() {
        return this._nome;
    }

    get preco() {
        return this._preco;
    }

    set preco(novoPrece) {
        if (novoPrece > 0) {
            this._preco = novoPrece;
        }
    }

    get precoFinal(){
        return this._preco * (1- this._desc);
    }
}

const p1 = new Produto('Caneta',8.99);
console.log(p1.nome);
p1.preco = 0;
console.log(p1.preco);
const p2 = new Produto('Papel',10.99);
console.log(p2.nome);
console.log(p2.precoFinal);