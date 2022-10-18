const Carrinho = [
    {nome:"Maçã",qtd: 2, preco:10},
    {nome:"Pera",qtd: 5, preco:5},
    {nome:"Uva",qtd: 0, preco:6.99},
    {nome:"Uva",qtd: 3, preco:6}
];
const getMaiorSeis = produto => produto.preco >= 1000;

const getName = produto => produto.nome;
const itensValido = Carrinho
    .filter(getMaiorSeis)
    .map(getName);

console.log(itensValido);