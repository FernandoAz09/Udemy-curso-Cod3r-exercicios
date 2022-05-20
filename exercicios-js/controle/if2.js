function teste1(num) {
    if(num > 7)
        console.log(num)
    
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7) ; {
        console.log(num)
    }
}

teste2(6)
teste2(8)

/* COMO ELE LÊ:

function teste2(num) {
    if(num > 7)
        ; // não usar ";" com as estruturas de controle... ele não compreende que o bloco seguinte faz parte do IF
        
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)
*/