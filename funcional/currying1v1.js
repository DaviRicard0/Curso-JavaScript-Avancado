/*const soma = a => {
    return b => {
        return a + b;
    }
}

console.log(soma(1)(8))*/

const textoComTamanhoEntre = (min,max,erro,texto) => {
    const tamanho = (texto || '').trim().length;

    if (tamanho < min || tamanho > max) {
        throw erro;
    }
}

const p1 = {nome:'A', preco: 14.99, desc:0.6};

textoComTamanhoEntre(4,255,'Nome inválido',p1.nome);