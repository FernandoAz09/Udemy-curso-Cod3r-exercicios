let contador = 1 //declaração da variavel
while(contador <= 10){ //expressão
    console.log(`contador = ${contador}`)
    contador++ //Incremento
}

for(let i = 1; i <= 10; i++) { //declaração, expressão e incremento
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}