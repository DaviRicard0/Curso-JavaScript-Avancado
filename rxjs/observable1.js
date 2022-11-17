const { Observable } = require("rxjs");

const promise = new Promise(resolve=>{
    resolve('Promise é legal!');
});

promise.then(console.log)

const obs = new Observable(subscriber =>{
    subscriber.next('Observer!');
    subscriber.next('é!');
    subscriber.complete();
    subscriber.next('legal!');
});

obs.subscribe(console.log)