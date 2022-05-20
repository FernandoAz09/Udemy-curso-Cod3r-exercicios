{
    {
        {
            {
                var sera = 'Será???' //var visível dentro ou fora do bloco "GLOBAL"
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123
    console.log(local) //var dentro de função visível apenas dentro do bloco da função
}
teste()
console.log(local)