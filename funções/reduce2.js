const nums = [1,2,2,10,3];

Array.prototype.meuReduce = function(fn, vn) {
    let acc = vn;
    for (let i = 0; i < this.length; i++) {
        if (!acc && i === 0) {
            acc = this[i];
        }else{
            acc = fn(acc,this[i],i,this);
        }
    }
    return acc;
}

const soma = (acc,el) => acc + el;

console.log(nums.meuReduce(soma));