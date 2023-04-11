const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']


console.log(towns)
console.log(...towns)
console.log(...towns[0])

// refência ao array antigo 
const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({ towns, townsCopy }) // as duas arrays receberam as transformações por conta de valor e referência

// novo array
const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({ towns, townsCopy, townsClone })

// Único caso onde o spread é utilizado em objetos não iteráveis
const townsObject = { ...towns }

const townsObj = { ...townsObject }
const townsObjectClone = { ...townsObject }
townsObjectClone.test = 'Test'

console.log({ townsObject, townsObjectClone })