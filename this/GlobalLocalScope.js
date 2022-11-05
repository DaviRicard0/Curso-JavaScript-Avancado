//Global scope

this.name = "Davi";
console.log(`Antes da função: ${this}`);
const sayMayName = () => {
    console.log(`Dentro da função: ${this.name}`);
    this.hi = function hi(){
        console.log('hi');
    }
    console.log(this)
}

sayMayName();
console.log(`Fora da função: ${this}`);