// Função normal    
function normalSum(a, b) {
    return a + b;
}

// Função Anônima
const annonymousSum = function (a, b) {
    return a + b;
}

// Arrow Function
const arrowSum = (a, b) => {
    return a + b;
}

// Arrow function em uma só linha
const subtract = (a, b) => a - b;

const double = n => `O dobro de ${n} é : ${n * 2}`;


console.log(`Soma normal: ${normalSum(2, 2)}`);
console.log(`Soma anônima: ${annonymousSum(2, 2)}`);
console.log(`Soma arrow function: ${arrowSum(2, 2)}`);
console.log(`Subtração: ${subtract(5, 2)}`);
console.log(double(5));

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')

console.log(startingWithP)
