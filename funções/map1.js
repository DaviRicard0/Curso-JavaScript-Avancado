const array = [12,13,12,14,2];
//Map tem a função de transformar o array
const result = array.map(num => num - 2);
console.log(result);

const arrayName = ["Davi","Maria","Fernanda"];
const resultName = arrayName.map(name => name[0]);
console.log(resultName);

const carrinho = [
    {produto:"Maçã",valor:10},
    {produto:"Pera",valor:4},
    {produto:"Uva",valor:6}
];
const resultCarrinho = 
    carrinho.map(
        carrinho => 
            `Prod.: ${carrinho.produto},Venda: R$${carrinho.valor}`);
console.log(resultCarrinho);

const nums = [1,2,4,5];
const dobro = n => n * 2;
console.log(nums.map(dobro));

const nomes = ['Ana','Davi','Bia'];
const primeiraLetra = text => text[0];
const letras = nomes.map(primeiraLetra);
console.log(nomes,letras);

const Carrinho = [
    {nome:"Maçã",qtd: 2, preco:10},
    {nome:"Pera",qtd: 5, preco:5},
    {nome:"Uva",qtd: 0, preco:6.99},
    {nome:"Uva",qtd: 3, preco:6}
];
const nomeProduto = produto => produto.nome;
console.log(Carrinho.map(nomeProduto));

const total = 
    produto => produto.qtd * produto.preco;
console.log(Carrinho.map(total));