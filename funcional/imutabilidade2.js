const nums = Object.freeze([1,4,61,23,13]);

//Dados mutaveis
/*
let total = 0;

for (let i = 0; i < nums.length; i++) {
    total += nums[i];
}

console.log(total)
*/
//Imutavel
/*const soma = nums.reduce((acc,el)=>acc+el,0);
console.log(`Soma: ${soma}, Original: ${nums}`)*/

//Recursivo
const somar = (array, total = 0) => {
    if (array.length === 0)
        return total;

    return somar(array.slice(1), total + array[0]);
}

console.log(somar(nums));