const {of} = require('rxjs');
const {last,map} = require('rxjs/operators');

const obs = of(1,2,"Ana",false,"Maria");

obs.pipe(last()).pipe(map(v => v[0])).subscribe(console.log)