/*
 Ваше завдання - створити функцію greet в JavaScript. Ця функція повинна приймати два аргументи:

 msg: Рядок, який представляє привітання, наприклад “Hi”, “Hey” або “Hello”.
 name: Рядок, який представляє ім’я особи, наприклад “John”, “Bob” або “Mary”.

 Функція greet повинна повертати новий рядок, який поєднує msg та name з комою та пробілом між ними. Наприклад, якщо msg це “Hi” і name це “John”, то функція повинна повернути рядок “Hi, John”.

 Ось приклад використання цієї функції:

 console.log(greet('Hi', 'John')) // Hi, John
 console.log(greet('Hey', 'Bob')) // Hey, Bob
 console.log(greet('Hello', 'Mary')) // Hello, Mary
*/
// Определение функции greet


function greet(name,greeting) {
  return `${greeting}, ${name}!`;
}
const greetingMessage = greet('Mary', 'Hello');
console.log(greetingMessage);

const greetingMessage2 = greet('Bob', 'Hey');
console.log(greetingMessage2);

const greetingMessage3 = greet('Martin', 'Hi');
console.log(greetingMessage3);
