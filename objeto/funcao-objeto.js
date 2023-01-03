let pessoa = {
    nome: 'paulo',
    sobrenome: 'vinicius',
    idade: 23,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nomeCompleto());

