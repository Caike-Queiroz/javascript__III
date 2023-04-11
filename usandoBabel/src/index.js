// Média aritmética Simples
const average = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0) // O zero significa que o accumalodor começa em 0
    return sum / numbers.length
}

// Média aritmética Ponderada
const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / weightSum
}

// Mediana
const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b) // o " a - b " é para dizer que queremos que seja ordenado na ordem crescente
    const middle = Math.floor(orderedNumbers.length / 2)
    if (orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    }
    if (orderedNumbers.length % 2 == 0) {
        return average(orderedNumbers[middle - 1], orderedNumbers[middle])
    }
    // O if da linha 21 a 23 foi a minha solução, alterei pois achei que ficou mais fácil de compreender

    // Essas 3 linhas abaixo foi a solução do prof
    // const firstMedian = orderedNumbers[middle-1]
    // const secondMedian = orderedNumbers[middle]
    // return average(firstMedian, secondMedian)
}

//Moda
const mode = (...numbers) => {
    // quantities --> [ [n, qtd], [n, qtd],  [n, qtd]]
    // .map vai pegar o array e transformar em outro array
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length // o filter trás todas as ocorrências do mesmo número, e o length devolve a quantidade de ocorrências
    ])
    // o .sort ordenará na ordem decrescente baseado no 2° valor (qtd), com isso, o elemento que mais repete, será o primeiro elemento da array quantities
    quantities.sort((a, b) => b[1] - a[1]) // b[1] e a[1] são o qtd
    return quantities[0][0]
}

console.log(`Média Aritmética Simples: ${average(3, 6, 10, 9)}`)

console.log(`Média ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 }
)}`)

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)