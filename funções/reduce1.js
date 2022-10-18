const carrinho = [
    {nome:"Maçã",qtd: 2, preco:10.2},
    {nome:"Pera",qtd: 5, preco:5.79},
    {nome:"Uva",qtd: 0, preco:6.99},
    {nome:"Melancia",qtd: 3, preco:6.03}
];

const getValor = 
    produto => produto.qtd * produto.preco;
const getTotal = (acc,el) => {
    return acc + el;
};

const result = carrinho
    .map(getValor)
    .reduce(getTotal, 0);

console.log(result);