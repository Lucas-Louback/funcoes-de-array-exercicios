const meuArray = [1, 2, 3, 4, 5, 6, 7, 8]
const multiplicaPor5 = meuArray.map((item) => {
    const multiplicados = item * 5
    return multiplicados
})
console.log(multiplicaPor5)

const dividePor2 = meuArray.map((item) => {
    const divididos = item / 2
    return divididos
})
console.log(dividePor2)

