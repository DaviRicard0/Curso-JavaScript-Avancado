//Uma entrada e uma saída

const PI = 3.14

//Função impura
const areaCirc = raio => {
    return raio * raio * PI
}
console.log(areaCirc(10))

//Função pura
const AreaCirc = (raio, pi) => {
    return raio * raio * pi;
}
console.log(AreaCirc(10,PI))