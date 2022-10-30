const textoComTamanhoEntre = min => {
    return max => {
        return erro => {
            return texto => {
                //Lazy Evaluation
                const tamanho = (texto || '').trim().length;

                if (tamanho < min || tamanho > max) {
                    throw erro;
                }
            }
        }
    }
}

const aplicarValidacao = fn => {
    return valor =>{
        //Lazy Evaluation
        try {
            fn(valor);
        } catch (e) {
            return {error: e};
        }
    }
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome inválido');
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido);

const p1 = {nome:'A', preco: 14.99, desc:0.6};
const p2 = {nome:'An', preco: 145.99, desc:0.8};

console.log(validarNomeProduto(p1.nome));