const pessoa = {
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: {
        rua:"UM"
    }
}

const alteraPessoa = pessoa => {
    const novaPessoa = {...pessoa};
    novaPessoa.nome = "Davi";
    novaPessoa.cidade = "Rio de Janeiro";
    return novaPessoa;
}

console.log(pessoa)
console.log(alteraPessoa(pessoa))
