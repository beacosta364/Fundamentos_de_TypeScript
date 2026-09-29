const colors = ["red", "green", "blue"]; 
const [first, second, third] = colors;

console.log({ first, second, third });

// RETO
const numbers = [10, 20, 30, 40, 50];

const [primero, segundo, ...rest] = numbers;   ///rest agrupa los elementos sobrantes en un nuevo array.

const ultimo = rest[rest.length - 1];

console.log({primero, segundo, ultimo});