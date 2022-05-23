const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcionar e Orientada à Objetos

const falarDePessoa = pessoa.falar.bind(pessoa) // bind referenciando o objeto
falarDePessoa() 