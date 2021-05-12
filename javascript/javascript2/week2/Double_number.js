const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleOddNumbers = numbers
  .filter((number) => number % 2 !== 0)
  .map((number) => number * 2);
console.log(doubleOddNumbers);
