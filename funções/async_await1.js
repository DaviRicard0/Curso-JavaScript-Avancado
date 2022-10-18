const esperarPor = (tempo = 2000) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(5)
        }, tempo);
    });
};
const esp = async () => {
    const resposta = await esperarPor(7000);
    console.log(resposta);
    const resposta2 = await esperarPor(500);
    console.log(resposta2);
    const resposta3 = await esperarPor(3000);
    console.log(resposta3);
}

esp();