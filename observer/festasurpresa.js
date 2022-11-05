const readline = require('readline');

const obterResposta = pergunta => {
    const rl = readline.createInterface({
        input: process.stdin, 
        output: process.stdout
    });
    return new Promise(resolve => {
        rl.question(pergunta,resp => {
            resolve(resp);
            rl.close();
        });
    });
}

const namorada = () => {
    console.log('N: Apagar as luzes.');
        console.log('N: Pedir silêncio.');
        console.log('N: Surpresa!!!!');
}

const sindico = () => {
    console.log('S: Monitorar o barulho!');
}

const porteiro = async interessados => {
    while(true){
        const resp = await obterResposta('O namorado chegou? (s/N/q) ');
        if(resp.toLowerCase() === 's')
            (interessados || []).forEach(obs => obs());
        else if(resp.toLowerCase() === 'q')
            break;
    }
}

porteiro([sindico,namorada]);

porteiro();