const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

/*
* Devido VAR não ter escopo de função (ser "GLOBAL"),
* ele imprime o valor máx (10) em qualquer posição do Array
*/