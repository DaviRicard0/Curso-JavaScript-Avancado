const carrinho = [
    {nome:"Maçã",qtd: 2, preco:10, fragil: true},
    {nome:"Pera",qtd: 5, preco:5, fragil: false},
    {nome:"Uva",qtd: 4, preco:6.99, fragil: true},
    {nome:"Melancia",qtd: 3, preco:6, fragil: true}
];

const getFragil = item => item.fragil;

const getTotal = item => item.qtd * item.preco;

const getMedia = (acc, el) => {
    const novaQtd = acc.qtd + 1;
    const novoTotal = acc.total + el;

    return {
        qtd: novaQtd, 
        total: novoTotal,
        media: novoTotal / novaQtd
    }
};

const mediaInicial = {qtd: 0, total: 0, media: 0};

const media = carrinho
    .filter(getFragil)
    .map(getTotal)
    .reduce(getMedia,mediaInicial);

console.log(media);
