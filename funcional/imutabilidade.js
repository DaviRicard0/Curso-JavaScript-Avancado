const nums = Object.freeze([3, 1, 7, 9, 4, 6]);

//Função pura
const ordenar = (array) => {
    return [...array].sort((a,b)=> b-a);
}

console.log(ordenar(nums))
console.log(nums)