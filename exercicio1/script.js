// # Exercício 1

// Crie duas funcões que recebem como parâmetro um objeto.

// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que os **valores** deste objeto fiquem em CAIXA ALTA.

//     Saída esperada:

//     `{ nome: 'ASTRODEV', profissao: 'DEV DAS ESTRELAS', username: 'ASTRODEV_LABENU', senha: 'MELHORDETODOS'}`

// 2. A segunda deve retornar os valores do objeto como texto corrido.

//     Saída esperada:

//     `O valor da propriedade ${propriedade} é ${valor}.`

// 3. Agora, crie uma funcão que recebe um objeto e uma callback como parâmetros. A funcão principal deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

//     Chame a funcão 3, passando como argumentos o **objeto disponibilizado** no arquivo `script.js`, e a função 1.
//     Repita o processo para a funcão 2.

const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const maiusculo = (objeto) => {
    for (let i in objeto) {
        objeto[i] = objeto[i].toUpperCase()
    }
    return objeto
}
console.log(maiusculo(infosPessoa))


const texto = (objeto) => {
    for (let i in objeto) {
        console.log(`O valor da propriedade ${i} é ${objeto[i]}.`)
    }
}
texto(infosPessoa)


const minhaFuncao = (objeto, callback) => {
    console.log(callback(objeto))
}
minhaFuncao(infosPessoa, maiusculo)
minhaFuncao(infosPessoa, texto)
