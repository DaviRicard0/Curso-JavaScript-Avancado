const gerarNumerosEntre = (min,max, tempo) => {
    if (min > max) {
        [max,min] = [min,max]
    }

    return new Promise(resolve => {
            setTimeout(() => {
                const fator = max - min + 1;
                const aleatorio = parseInt(Math.random() * fator) + min;
                resolve(aleatorio);
            }, tempo);
        }
    );
}

const gerarNumeros = () => {
    return Promise.all([
        gerarNumerosEntre(1,10,2000),
        gerarNumerosEntre(50,55,500),
        gerarNumerosEntre(78,95,3000),
        gerarNumerosEntre(79,95,300),
        gerarNumerosEntre(9,10,200),
    ]);
};

gerarNumeros()
    .then(console.log);