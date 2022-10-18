const somarNoTerminal = (a,b) => console.log(a + b);

const subtrairNoTerminal = (a,b) => console.log(a - b);

const subtrair = (a,b) => a - b;

const exec = (fn, a, b) => {
    return fn(a,b);
}

exec(somarNoTerminal,56,38);
exec(subtrairNoTerminal,56,38);

const r = exec(subtrair,56,38);

console.log(r)

setInterval(() => console.log("Exec 2..."), 1000);
