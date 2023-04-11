"use strict";

// Média aritmética Simples
var average = function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0); // O zero significa que o accumalodor começa em 0
  return sum / numbers.length;
};

// Média aritmética Ponderada
var weightedAverage = function weightedAverage() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    var _entry$weight;
    return accum + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
};

// Mediana
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  }); // o " a - b " é para dizer que queremos que seja ordenado na ordem crescente
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  if (orderedNumbers.length % 2 == 0) {
    return average(orderedNumbers[middle - 1], orderedNumbers[middle]);
  }
  // O if da linha 21 a 23 foi a minha solução, alterei pois achei que ficou mais fácil de compreender

  // Essas 3 linhas abaixo foi a solução do prof
  // const firstMedian = orderedNumbers[middle-1]
  // const secondMedian = orderedNumbers[middle]
  // return average(firstMedian, secondMedian)
};

//Moda
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  // quantities --> [ [n, qtd], [n, qtd],  [n, qtd]]
  // .map vai pegar o array e transformar em outro array
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length // o filter trás todas as ocorrências do mesmo número, e o length devolve a quantidade de ocorrências
    ];
  });
  // o .sort ordenará na ordem decrescente baseado no 2° valor (qtd), com isso, o elemento que mais repete, será o primeiro elemento da array quantities
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  }); // b[1] e a[1] são o qtd
  return quantities[0][0];
};
console.log("M\xE9dia Aritm\xE9tica Simples: ".concat(average(3, 6, 10, 9)));
console.log("M\xE9dia ponderada: ".concat(weightedAverage({
  number: 9,
  weight: 3
}, {
  number: 7
}, {
  number: 10,
  weight: 1
})));
console.log("Mediana: ".concat(median(2, 5, 99, 4, 42, 7)));
console.log("Mediana: ".concat(median(15, 14, 8, 7, 3)));
console.log("Moda: ".concat(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));