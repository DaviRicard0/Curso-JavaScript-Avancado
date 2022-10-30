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

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome inválido');

const p1 = {nome:'A', preco: 14.99, desc:0.6};

forcarNomeProdutoValido(p1.nome);