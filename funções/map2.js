const nums = [1,6,5,2]
const getDobro = num => num * 2;

//Map
console.log(nums.map(getDobro))

//Forma correta
Array.prototype.meuMap = function (fn) {
    const mapped = []
    for (let i = 0; i < this.length; i++) {
        const result = fn(this[i], i ,this);
        mapped.push(result);
    }

    return mapped;
}

const num = [12,31231,12312]
const dobro = n => n*2;

console.log(num.meuMap(dobro));