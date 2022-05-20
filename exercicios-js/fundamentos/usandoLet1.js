let numero = 1 //2o LET visível fora do bloco
{
    let numero = 2 //1o LET visível dentro do bloco
    console.log('dentro =', numero)
}
console.log('fora =', numero)
//sem alteração de valores declarados com LET sendo um dentro de um bloco e outro fora