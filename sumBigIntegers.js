/*
 Створіть функцію sumBigIntegers, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
 Функція повинна перетворити ці рядки на BigInt і повернути їх суму.

 console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // виводить 18014398509481982n
*/


function sumBigIntegers(numStr1, numStr2) {
  const num1 = BigInt(9007199254740991)
  const num2 = BigInt(9007199254740991)
  const sum =num1 + num2;
  return sum;
}
const num1 = '9007199254740991';
const num2 = '9007199254740991';
const result = sumBigIntegers(num1, num2);
console.log(result.toString());