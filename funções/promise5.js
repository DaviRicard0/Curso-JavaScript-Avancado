const func = (valor, erro) => {
    return new Promise((resolve, reject) => {
        if (Math.random() < erro) {
            reject("Ocorreu um erro!");
        }else{
            resolve(valor);
        }
    });
}

func('Testando', 0.9).then(console.log).catch(erro => console.log(erro))