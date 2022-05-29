// function  declatarion // carregada sempre em primeiro // pode chamar a função antes de declarada
console.log( soma(3, 4))

function soma(x, y) { // normal
    return x + y
}
// function expression // só pode chamar a função depois de declarada

const sub = function (x, y) { // anonima
    return x - y
}
console.log( sub(3, 4))
// named function expression // só pode chamar a função depois de declarada

const mult = function mult(x, y) { // as duas juntas, nomeando a função
    return x * y
}
console.log( mult(3, 4))