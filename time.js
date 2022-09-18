// Exemplo: seleção de futebol campeã da Copa do Mundo de 2002

let time = [
    {
        nome:"Dida",
        camisa: 1,
        posicao: "goleiro"
    },
    {
        nome:"Roque Jr.",
        camisa: 3,
        posicao: "zagueiro"
    },
    {
        nome: "Edmilson",
        camisa: 5,
        posicao: "zagueiro"
    },
    {
        nome:"Júnior Baiano",
        camisa: 4,
        posicao: "zagueiro"
    },
    {
        nome:"Cafú",
        camisa:2,
        posicao: "lateral"
    },
    {
        nome:"Roberto Carlos",
        camisa: 6,
        posicao: "lateral"
    },
    {
        nome:"Gilberto Silva",
        camisa:8,
        posicao: "volante"
    },
    {
        nome:"Kleberson",
        camisa:18,
        posicao: "meio-campo"
    },
    {
        nome:"Rivaldo",
        camisa:10,
        posicao: "meio-campo"
    },
    {
        nome:"Ronaldinho",
        camisa:11,
        posicao: "atacante"
    },
    {
        nome:"Ronaldo",
        camisa:9,
        posicao: "atacante"

    }
]

/*
console.log(time.length)
console.table(time) // funcao que monta uma tabela
*/

/*
for (let i = 0; i<time.length;i++){
    console.log(i, time[i])
}
*/

// forin (vai de um em um e perfila até o final)
// no key guarda a posição do objeto/vetor
/*
    for (const key in time) {
    console.log(key,time[key])
}
*/

// forof (inves de guardar a posicao ele guarda o valor)
/*
for (const jogador of time) {
    console.log(jogador)
}

console.table(time)
*/
/*
for (const i in time) {
    //time[i].multiplo = time[i].camisa * 2
    // multiplo é um atributo novo
    // camisa é um atributo existente
    // colocar objeto_vetor[posicao]
    /*
    // também serve
    
    time[i]["multiplo"] = time[i]["camisa"] * 2
}

console.table(time)
*/

// key ou i ou posição são sinonimos

for (const jogador of time) {
    jogador["multiplo"] = jogador["camisa"]*2
    //jogador.multiplo = jogador.camisa*2
}
console.table(time)