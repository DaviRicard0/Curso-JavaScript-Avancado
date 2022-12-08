const { Observable, range } = require("rxjs");

const entre = (min,max) => new Observable(subscriber =>{
    let count = min;
    for (let i = 0; i < (max - min) + 1; i++) {
        subscriber.next(count);

        count ++;
    }
    subscriber.complete();
});

entre(4,14).subscribe(resp=>console.log(`Num: ${resp}`));