const soma = (x, y) => x + y // shorthand

const imprimirResultado = (a, b, operacao = soma) => console.log(operacao(a, b)) // shorthand

imprimirResultado(3, 4) 
imprimirResultado(3, 4, soma) 
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar() {
        console.log('Opa')
    }
}

pessoa.falar()
// função anonima é uma função sem nome...