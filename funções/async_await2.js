const gerarNumerosEntre = (min,max, numerosProibidos) => {
    if (min > max) {
        [max,min] = [min,max]
    }

    return new Promise((resolve,reject) => {
            const fator = max - min + 1;
            const aleatorio = parseInt(Math.random() * fator) + min;
            if (numerosProibidos.includes(aleatorio)) {
                reject('Número repetido!')
            }else{
                resolve(aleatorio)
            }
            resolve(aleatorio);
        }
    );
}

const gerarMegaCena = async (qtdeNumero, tentativas = 1) => {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumero).fill()) {
            const sorteado = await gerarNumerosEntre(1, 6, numeros);
            numeros.push(sorteado);
        }
        console.log(numeros);
        return numeros;
    } catch (error) {
        if (tentativas > 10) {
            throw "Ah";
        }else{
            console.log(tentativas);
            gerarMegaCena(qtdeNumero, tentativas + 1);
        }
    }
}

gerarMegaCena(8).then(console.log).catch(console.log)