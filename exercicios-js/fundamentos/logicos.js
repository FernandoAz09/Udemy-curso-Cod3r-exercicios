function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // || = Ou
    const comprarTv50 = trabalho1 && trabalho2 // && = E
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // Bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // (!=) = Diferença (funciona como xor)
    const manterSaudavel = !comprarSorvete // Negação ( operador unário )

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // Sem precisar criar chave/valor para não ter redundancia
} 



console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))