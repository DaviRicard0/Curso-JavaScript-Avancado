const { Observable } = require("rxjs");

const obs = new Observable(subscriber =>{
    subscriber.next('Observer!');
    subscriber.next('é!');
    subscriber.next('legal!');
    subscriber.add(1).Observable;
    subscriber.complete();
});

obs.subscribe({
    next: resp=>{console.log(`Valor: ${resp}`)}, // função que trata o acerto
    error: erro=>{console.log(`Erro: ${erro}`)}, // função que trata o erro
    complete: ()=>{console.log('Stream encerrado!')} // função equivalente ao finally
});